﻿import { TextDocumentChangeEvent } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import log from "../log"
import { parseUnit } from "../delphiService/delphiService";

export const didChange = (event: TextDocumentChangeEvent<TextDocument>): any => {
	// connection.window.showInformationMessage(
	// 	"onDidChangeContent: " + event.document.uri
	// );
	log.write("CHANGE");
	parseUnit (event.document)
}