import { Range, TextDocument } from "vscode-languageserver-textdocument";
import Tokenizr from "tokenizr"
import { iunit } from "./types/iunit";
import {strict as assert} from "assert"
import { iprocedure } from "./delphiTypes";
import log from "../log";


function getlineRange(document: TextDocument, line: number): Range {
	return {
		start: {
			line,
			character: 0
		},
		end: document.positionAt(document.offsetAt({
				line: line + 1,
				character: 0
			}) - 1)
	}
}

// function parseUnit (unitLine: string): iunit {
// 	return iunit.addOrReplaceNewUnit(unitLine.match(iunit.unitRegex)![0]) //possible runtime error if unitline is wrong - for now okay
// }

// export function parseInterface(document: TextDocument){
// 	let startUnit: number = -1;
// 	let startInterface: number = -1;
// 	let startImplementation: number =-1;

// 	for (let lineNr = 0; lineNr < document.lineCount; lineNr++) {
// 		const line = document.getText(getlineRange(document, lineNr))
// 		if (line.startsWith("unit")){
// 			parseUnit (line)
// 		}
// 		else if (startUnit === -1)
// 			continue;
// 		if (line.startsWith("interface"))
// 			startInterface = lineNr;
// 		else if (startInterface === -1)
// 			continue;
// 		if (line.startsWith("implementation")){
// 			startImplementation = lineNr;
// 			break;
// 		}
// 	}
// }

let lexer = new Tokenizr()
let initialized = false;

function init(){
	assert(!initialized);
	initialized = true;
	//TODO: split up in logic per syntactical state, this will become huge otherwise
	lexer.rule('skip-implementation', /end\./, (ctx, match) => {
		assert(ctx.pop() === "skip-implementation");
		ctx.reject()
	});
	lexer.rule('skip-implementation', /./, (ctx, match) => {
		ctx.ignore();
	})
	lexer.rule(/\/\/[^\r\n]*\r?\n/, (ctx, match) => { ctx.ignore() }); //single line comment
	lexer.rule(/\{.*\}/m, (ctx, match) => { ctx.ignore() }); // multiline comments
	// lexer.rule(/end;/, (ctx, match) => {
	// 	assert((ctx.state().match(/,/g) || []).length > 1);
	// 	ctx.pop();
	// 	ctx.ignore();
	// })
	lexer.rule(iunit.tokenId, /end\./, (ctx, match) => {
		assert(ctx.pop() === iunit.tokenId)
		ctx.accept("unitEnd")
	});
	lexer.rule(iunit.tokenId, iunit.interfaceRegex, (ctx, match) => { 
		ctx.tag(iunit.tokenInterface)
		ctx.accept (iunit.tokenInterface)
	})
	lexer.rule(iunit.tokenId + ` #${iunit.tokenInterface}`, /implementation/, (ctx, match) => {
		ctx.push("skip-implementation");
		ctx.ignore();
	});
	// lexer.rule(iunit.tokenId + " #interface #implementation", /initialization/, (ctx, match) => {
	// 	//this should always be skipped
	// 	throw lexer.error("initialization should always have been skipped")
	// });
	// lexer.rule(iunit.tokenId + " #interface #implementation", /finalization/, (ctx, match) => {
	// 	//this should always be skipped
	// 	throw lexer.error("finalization should always have been skipped")
	// });
	lexer.rule(iunit.unitRegex, iunit.parseUnit); //possibly need to call .bind(X) on parseUnit
	lexer.rule(iunit.tokenId, iprocedure.procedureRegex, iprocedure.parseProcedure);
	lexer.rule(iprocedure.tokenId + " #header", /\(/, (ctx, m)=>{
		ctx.tag("args");
		ctx.ignore();
	});
	lexer.rule(iprocedure.tokenId + " #header #args", /\)/, (ctx, m) => {
		ctx.untag("args");
		ctx.ignore()
	});
	lexer.rule(iprocedure.tokenId + "#header #args", /;/, (ctx, m) => {
		ctx.accept("argSeperator");
	});
	lexer.rule(iprocedure.tokenId + "#header #args", iprocedure.argumentsRegex, iprocedure.parseArguments);
	lexer.rule(iprocedure.tokenId + " #header", /;/, (ctx, m)=>{
		ctx.untag("header");
		ctx.pop()
		ctx.accept("procedureEnd");
	});
	lexer.rule(/[\s\r\n]+/, (ctx, m) => {
		ctx.ignore()
	})

}

export function parseUnitEx2(document: TextDocument){
	if (!initialized)
		init()

	lexer.input(document.getText())
	
	log.write("consuming unit")
	lexer.consume(iunit.tokenId)
	log.write("consuming interface")
	lexer.consume(iunit.tokenInterface)
	for(;;){
		log.write("consuming procedures")
		let item = lexer.alternatives(
			parseProcedure,
			parseEmpty
		)
		if (item === undefined)
			break;
	}
	log.write("consuming unitEnd")
	lexer.consume("unitEnd")
	lexer.consume("EOF")

	log.write(iunit._units)
}

function parseProcedure(){
	log.write("consuming procedure")
	lexer.consume(iprocedure.tokenId)
	let item = lexer.alternatives(
		parseArguments,
		() => {
			log.write("consuming procedure end 1")
			return lexer.consume("procedureEnd") 
		}
	)
	return item;
}

function parseArguments(){
	log.write("consuming arguments")
	lexer.consume(iprocedure.tokenArgument)
	while (lexer.peek().isA("argSeperator")){
		lexer.consume("argSeperator")
		lexer.consume(iprocedure.tokenArgument)
	}
	log.write("consuming procedure end 2")
	return lexer.consume("procedureEnd");
}

function parseEmpty() {
	log.write("consuming nothing (loop ended)")
	return undefined
}