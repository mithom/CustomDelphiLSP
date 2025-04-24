import { Connection, TextDocuments } from "vscode-languageserver"
import { TextDocument } from "vscode-languageserver-textdocument"

import { didChange } from "./didChange"
import { didClose } from "./didClose"
import { didOpen } from "./didOpen"
import { didSave } from "./didSave"
import { willSave } from "./willSave"
import { willSaveWaitUntil } from "./willSaveWaitUntil"

// Create a simple text document manager.
export const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

export class fileService {
	constructor(){

	}
	init(connection: Connection): void {
		documents.onDidChangeContent(didChange);
		documents.onDidClose(didClose);
		documents.onDidOpen(didOpen);
		documents.onDidSave(didSave);
		documents.onWillSave(willSave);
		documents.onWillSaveWaitUntil(willSaveWaitUntil);

		// Make the text document manager listen on the connection
		// for open, change and close text document events
		documents.listen(connection);
	}
}