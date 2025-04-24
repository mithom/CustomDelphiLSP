import { TextDocumentChangeEvent } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { parseUnit } from "../delphiService/delphiService";
import log from "../log";

export function didOpen (event: TextDocumentChangeEvent<TextDocument>): any {
	log.write("OPEN")
	parseUnit (event.document)
}