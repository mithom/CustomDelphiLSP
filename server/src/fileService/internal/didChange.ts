import { PublishDiagnosticsParams, TextDocumentChangeEvent } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import log from "../../log"
import { connection, service } from "../../server";
import { parseUnit } from "../../delphiService/delphiService";

export async function didChange(event: TextDocumentChangeEvent<TextDocument>): Promise<void> {
	// connection.window.showInformationMessage(
	// 	"onDidChangeContent: " + event.document.uri
	// );
	log.write("CHANGE");
	parseUnit (event.document)
	let diagnostics = await service.doValidation(event.document);
	let response: PublishDiagnosticsParams = {
		uri: event.document.uri,
		version: event.document.version,
		diagnostics,
	}
	connection.sendDiagnostics(response);
}