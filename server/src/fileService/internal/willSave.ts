import { TextDocumentChangeEvent } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

export const willSave = (event: TextDocumentChangeEvent<TextDocument>): any => {

}