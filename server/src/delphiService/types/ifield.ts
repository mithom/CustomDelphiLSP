import { namedInstance, accessModifier } from "./base";


export class ifield extends namedInstance {
	constructor(name: string, access?: accessModifier) {
		super(name, access);
	}
}
