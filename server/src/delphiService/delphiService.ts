import { Range, TextDocument } from "vscode-languageserver-textdocument";
import Tokenizr, { Token } from "tokenizr"
import { iunit } from "./types/iunit";
import {strict as assert} from "assert"
import { iprocedure } from "./delphiTypes";
import log from "../log";

// function getlineRange(document: TextDocument, line: number): Range {
// 	return {
// 		start: {
// 			line,
// 			character: 0
// 		},
// 		end: document.positionAt(document.offsetAt({
// 				line: line + 1,
// 				character: 0
// 			}) - 1)
// 	}
// }

let lexer = new Tokenizr()
let initialized = false;

function init(){
	if (initialized)
		return;
	initialized = true;
	//TODO: split up in logic per syntactical state, this will become huge otherwise
	//TODO: less syntax logic here, only lexical logic!

	lexer.rule('skip-implementation', /end\./i, (ctx, match) => {
		assert(ctx.state() === "skip-implementation");
		ctx.pop();
		ctx.reject();
	});
	lexer.rule('skip-implementation', /./, (ctx, match) => {
		ctx.ignore();
	});
	lexer.rule(/\/\/[^\r\n]*\r?\n/, (ctx, match) => { ctx.ignore() }); //single line comment
	lexer.rule(/{[^}]*}/, (ctx, match) => { ctx.ignore() }); // multiline comments

	lexer.rule(iunit.tokenId, /end\./i, (ctx, match) => {
		assert(ctx.pop() === iunit.tokenId)
		ctx.accept("unitEnd")
	});
	lexer.rule(iunit.tokenId, iunit.interfaceRegex, (ctx, match) => { 
		ctx.tag(iunit.tokenInterface);
		ctx.accept (iunit.tokenInterface);
	});
	lexer.rule(iunit.tokenId + ` #${iunit.tokenInterface}`, /implementation/, (ctx, match) => {
		ctx.push("skip-implementation");
		ctx.ignore();
	});
	lexer.rule(iunit.tokenId + ` #${iunit.tokenInterface}`, /uses/i, (ctx, match) => {
		ctx.push("uses")
		ctx.accept ("uses")
	});
	lexer.rule("uses", /,/, (ctx, match) => {
		ctx.accept ("usesSeperator")
	});
	lexer.rule("uses", /;/, (ctx, match) => {
		ctx.pop();
		ctx.accept ("usesEnd")
	});
	lexer.rule("uses", /[a-zA-Z]\w*/, (ctx, match) => {
		ctx.accept("usesUnit", match[0])
	});
	lexer.rule(iunit.unitRegex, iunit.parseUnit.bind(iunit));
	lexer.rule(iunit.tokenId, iprocedure.procedureRegex, iprocedure.parseProcedure.bind(iprocedure));
	lexer.rule(iprocedure.tokenId + " #header", /\(/, (ctx, m)=>{
		ctx.tag("args");
		ctx.ignore();
	});
	lexer.rule(iprocedure.tokenId + " #header #args", /\)/, (ctx, m) => {
		ctx.untag("args");
		ctx.ignore()
	});
	lexer.rule(iprocedure.tokenId + " #header #args", /;/, (ctx, m) => {
		ctx.accept("argSeperator");
	});
	lexer.rule(iprocedure.tokenId + " #header #args", iprocedure.argumentsRegex, iprocedure.parseArguments.bind(iprocedure));
	lexer.rule(iprocedure.tokenId + " #header", /;/, (ctx, m)=>{
		ctx.untag("header");
		ctx.pop()
		ctx.accept("procedureEnd");
	});
	lexer.rule(/[\s\r\n]+/, (ctx, m) => {
		ctx.ignore()
	})
}

export function parseUnit(document: TextDocument){
	init()

	lexer.input(document.getText())
	
	lexer.consume(iunit.tokenId)
	lexer.consume(iunit.tokenInterface)

	if(lexer.peek().isA("uses")){
		lexer.consume("uses");
		consumeUnit();
		for (;;) {
			let item = lexer.alternatives(
				() => {
					lexer.consume("usesSeperator")
					return consumeUnit();
				},
				() => lexer.consume("usesEnd")
			)
			if (item.isA("usesEnd"))
				break;
		}
	}

	for(;;){
		let item = lexer.alternatives(
			parseProcedure,
			parseEmpty
		)
		if (item === undefined)
			break;
	}
	lexer.consume("unitEnd");
	lexer.consume("EOF");

	log.write(iunit._units);
}

function consumeUnit(): Token {
	let result = lexer.consume("usesUnit");
	iunit.getOrReadUnit (result.value)
	return result;
}

function parseProcedure(): Token{
	lexer.consume(iprocedure.tokenId)
	let item: Token = lexer.alternatives(
		parseArguments,
		() => lexer.consume("procedureEnd")
	)
	return item;
}

function parseArguments(): Token{
	lexer.consume(iprocedure.tokenArgument)
	while (lexer.peek().isA("argSeperator")){
		lexer.consume("argSeperator")
		lexer.consume(iprocedure.tokenArgument)
	}
	return lexer.consume("procedureEnd");
}

function parseEmpty(): undefined {
	return undefined
}