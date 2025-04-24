import { type } from "../types";

export enum accessModifier {
	private = 1,
	protected,
	public,
	published
}export class namedInstance {
	name: string;
	access: accessModifier;

	constructor(name: string, access?: accessModifier) {
		this.name = name;
		if (access === undefined)
			this.access = accessModifier.private;

		else
			this.access = access;
	}
}

export type _arguments = Map<string, type>;

