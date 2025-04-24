import { TextDocumentChangeEvent } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { parseUnitEx2 } from "../delphiService/delphiService";
import log from "../log";

export function didOpen (event: TextDocumentChangeEvent<TextDocument>): any {
	log.write("OPEN")
	parseUnitEx2 (event.document)
}