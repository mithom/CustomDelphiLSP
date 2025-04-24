import { ifield } from "./ifield";
import { ifunction } from "./ifunction";
import { iprocedure } from "./iprocedure";
import { namedInstance, _arguments, accessModifier } from "./base";

type igetter = ifunction | ifield;
type isetter = iprocedure | ifield;

export class iproperty extends namedInstance {
	getter?: igetter;
	setter?: isetter;
	arrayIndexes: _arguments;

	constructor(name: string, getter?: igetter, setter?: isetter, indexes?: _arguments, access?: accessModifier) {
		super(name, access);
		this.getter = getter;
		this.setter = setter;
		if (indexes === undefined)
			this.arrayIndexes = new Map();

		else
			this.arrayIndexes = indexes;
	}
}
