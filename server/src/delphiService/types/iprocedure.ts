﻿import assert = require("assert");
import { namedInstance, _arguments, accessModifier } from "./base";
import { ActionContext } from "tokenizr";
import { iunit } from "./iunit";
import log from "../../log";

export class iprocedure extends namedInstance {
	args: _arguments;

	static readonly tokenId = "procedure"
	static readonly tokenArgument = "argument"
	static readonly procedureRegex: RegExp = /procedure\s+([a-zA-Z]\w*)/i;
	static readonly argumentsRegex: RegExp = /([a-zA-Z]\w*):\s*([a-zA-Z]\w*)/i;

	constructor(name: string, args?: _arguments, access?: accessModifier) {
		super(name, access);
		if (args === undefined)
			this.args = new Map();

		else
			this.args = args;
	}

	static parseProcedure(ctx: ActionContext, match: RegExpExecArray): ActionContext {
		assert (match.length == 2, "there should a match and 1 group");
		let procedure = new iprocedure (match[1]);
		if (ctx.state() === iunit.tokenId){
			const unit = ctx.data(iunit.tokenId) as iunit
			unit.procedures.set (procedure.name, procedure)
		}else{
			assert(false) // currently only procedures inside of units, not objects/records/other procedures supported
		}

		ctx.push(this.tokenId);
		ctx.data(this.tokenId, procedure);
		ctx.tag ("header")
		return ctx.accept(this.tokenId);
	}

	static parseArguments(ctx: ActionContext, match: RegExpExecArray): ActionContext {
		assert(match.length == 3, "there should a match and 2 group");
		const proc = ctx.data(this.tokenId) as iprocedure;
		proc.args.set(match[1], match[2]) //TODOTH add validation to the type
		return ctx.accept(this.tokenArgument)
	}
}
