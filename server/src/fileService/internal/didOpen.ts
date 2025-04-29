import { PublishDiagnosticsParams, TextDocumentChangeEvent } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { parseUnit } from "../../delphiService/delphiService";
import log from "../../log";
import { connection, service } from "../../server";

export async function didOpen (event: TextDocumentChangeEvent<TextDocument>): Promise<void> {
	log.write("OPEN")
	//parseUnit (event.document)
	let diagnostics = await service.doValidation(event.document);
	let response: PublishDiagnosticsParams = {
		uri: event.document.uri,
		version: event.document.version,
		diagnostics,
	}
	connection.sendDiagnostics(response);
}