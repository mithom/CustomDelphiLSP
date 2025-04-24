import { CancellationToken } from "vscode-languageserver";
import log from "../log"

export const request = (method: string, params: any[] | object | undefined, token: CancellationToken) : any => {
	log.write("REQUEST")
	log.write(method)
	log.write(JSON.stringify(params))
	return "";
}