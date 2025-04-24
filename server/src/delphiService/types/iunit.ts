import { iclass } from "./object";
import { iprocedure } from "./iprocedure";
import { ifunction } from "./ifunction";
import { ActionContext, RuleAction } from "tokenizr";
import { strict as assert } from "assert"
import { ifield } from "./ifield";
import log from "../../log";

export class iunit {
	name: string;
	functions: Map<string, ifunction> = new Map();
	procedures: Map<string, iprocedure> = new Map();
	classes: Map<string, iclass> = new Map();
	fields: Map<string, ifield> = new Map();

	static readonly tokenId = "unit"
	static readonly unitRegex: RegExp = /unit\s*([a-zA-Z]\w*);/i;
	static readonly tokenInterface = "interface"
	static readonly interfaceRegex: RegExp = /interface/i;
	static _units: Map<string, iunit> = new Map();

	private constructor(name: string) {
		this.name = name;
	}

	static parseUnit(ctx: ActionContext, match: RegExpExecArray): ActionContext {
		assert (match.length == 2, "there should a match and 1 group");
		assert (ctx.state() === "default");
		let unit = iunit.addOrReplaceNewUnit(match[1]);
		ctx.push(iunit.tokenId);
		ctx.data(iunit.tokenId, unit);
		log.write("parse unit done")
		return ctx.accept(iunit.tokenId);
	}

	static addOrReplaceNewUnit(name: string): iunit {
		let result: iunit | undefined;
		log.write(this)
		result = this._units.get(name);
		if (result === undefined) {
			result = new iunit(name);
			this._units.set(result.name, result)
			log.write(this)
		} else {
			result.setEmpty();
		}
		return result;
	}

	setEmpty() {
		this.functions.clear();
		this.procedures.clear();
		this.classes.clear();
	}
}
