﻿import * as fs from "fs"

const log = fs.createWriteStream("/TEMP/lsp.log");
export default {
	write: (message: object | unknown) => {
		console.log(message)
		// if (typeof message === "object"){
		// 	log.write(JSON.stringify(message));
		// }else{
		// 	log.write(message);
		// }
		// log.write("\n");
	}
}