import { namedInstance } from "./base";
import { ifield } from "./ifield";
import { ifunction } from "./ifunction";
import { iprocedure } from "./iprocedure";
import { iproperty } from "./iproperty";


export class recordOrClass extends namedInstance {
	functions: Map<string, ifunction> = new Map();
	procedures: Map<string, iprocedure> = new Map();
	fields: Map<string, ifield> = new Map();
	properties: Map<string, iproperty> = new Map();
	classes: Map<string, iclass> = new Map();
}

export class irecord extends recordOrClass {
}

export class iclass extends recordOrClass {
}
