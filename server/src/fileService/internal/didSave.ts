import { TextDocumentChangeEvent } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

export const didSave = (event: TextDocumentChangeEvent<TextDocument>): any => {
	
}