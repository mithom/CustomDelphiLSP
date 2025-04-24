import { type } from "../types";
import { namedInstance, _arguments, accessModifier } from "./base";


export class ifunction extends namedInstance {
	args: _arguments;
	returnType: type;

	constructor(name: string, returnType: type, args?: _arguments, access?: accessModifier) {
		super(name, access);
		if (args === undefined)
			this.args = new Map();

		else
			this.args = args;
		this.returnType = returnType;
	}
}
