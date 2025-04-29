import { CancellationToken, CompletionItem, CompletionList, CompletionParams, HandlerResult, ResultProgressReporter, ServerRequestHandler, WorkDoneProgressReporter } from "vscode-languageserver"
import { connection, service } from "../server"
import { fileService } from "../fileService"

export function completion(params: CompletionParams, token: CancellationToken, workDoneProgress: WorkDoneProgressReporter, resultProgress?: ResultProgressReporter<CompletionItem[]>): HandlerResult<CompletionList | null, void> {
	connection.window.showInformationMessage(
		"onCompletion LSP"
	)
	
	var doc = fileService.documents.get(params.textDocument.uri);
	if (doc === undefined)
		return null;
	if (!service.isSupported(doc))
		return null;
	return service.doComplete(doc, params.position);
}
