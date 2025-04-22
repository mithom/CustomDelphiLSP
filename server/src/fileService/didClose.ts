import { TextDocumentChangeEvent } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

export const didClose = (event: TextDocumentChangeEvent<TextDocument>): any => {
	
}