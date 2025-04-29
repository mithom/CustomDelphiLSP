import { InitializeResult, InitializeParams, TextDocumentSyncKind, CancellationToken, CancellationTokenSource } from "vscode-languageserver";
import log from "../log";
import { connection } from "../server";
import { fileService } from "../fileService"


export let hasConfigurationCapability: boolean = false;
export let hasWorkspaceFolderCapability: boolean = false;
export let hasDiagnosticRelatedInformationCapability: boolean = false;

export const initialize = (params: InitializeParams): InitializeResult => {
	log.write("INITIALIZE")
	log.write(JSON.stringify(params))
	connection.window.showInformationMessage(
		"onInitialize LSP"
	)
	
	fileService.workspaceFolders = params.workspaceFolders!
	let capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult =  {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true,
			}
		},
		serverInfo: {
			name: "custom-delphi-lsp",
			version: "0.0.1"
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
}