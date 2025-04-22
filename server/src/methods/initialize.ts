import { InitializeResult, RequestMessage, InitializeParams, TextDocumentSyncKind } from "vscode-languageserver";

export const initialize = (params: InitializeParams): InitializeResult => {
	return {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
		},
		serverInfo: {
			name: "VVdelphi-lsp",
			version: "0.0.1"
		}
	}
}