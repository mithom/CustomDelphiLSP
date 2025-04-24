import { iclass } from "./object";
import { iprocedure } from "./iprocedure";
import { ifunction } from "./ifunction";
import { ActionContext, RuleAction } from "tokenizr";
import { strict as assert } from "assert"
import { ifield } from "./ifield";
import log from "../../log";
import { documents } from "../../fileService/fileService";
import {parseUnit as parseDocument} from "../delphiService";

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
		let unit = this.addOrReplaceNewUnit(match[1]);
		ctx.push(this.tokenId);
		ctx.data(this.tokenId, unit);
		return ctx.accept(this.tokenId);
	}

	static addOrReplaceNewUnit(name: string): iunit {
		let result: iunit | undefined;
		result = this._units.get(name);
		if (result === undefined) {
			result = new iunit(name);
			this._units.set(result.name, result)
		} else {
			result.setEmpty();
		}
		return result;
	}

	static getOrReadUnit(name: string): iunit {
		let result: iunit | undefined;
		result = this._units.get(name);
		if (result === undefined) {
			result = new iunit(name);
			this._units.set(result.name, result)
			//TODO: parse this unit

			let file = documents.all().find((document) => document.uri.endsWith(`${name}.pas`))
			log.write(documents.all().map((doc)=>doc.uri))
			assert (file !== undefined)
			parseDocument(file)
		}
		return result;
	}

	setEmpty() {
		this.functions.clear();
		this.procedures.clear();
		this.classes.clear();
	}
}
