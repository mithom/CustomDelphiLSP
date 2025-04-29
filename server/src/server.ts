import { createConnection, DidChangeConfigurationParams, ProposedFeatures } from "vscode-languageserver/node";
import { initialize, request, notification, initialized, completion } from "./methods";
import { fileService } from "./fileService/fileService";
// import { LspServer } from "./core/lspServer";
import { ANTLR4LanguageService, createANTLR4LanguageService } from "./antlr4Service/service";
import { delphiLexer, delphiParser } from "./antlr4"
import { CharStream, CommonTokenStream } from "antlr4ng";
import log from "./log";

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
export const connection = createConnection(ProposedFeatures.all);
// export const server: LspServer = new LspServer();
export const service: ANTLR4LanguageService = createANTLR4LanguageService(["objectpascal"], (charStream: CharStream) => new delphiLexer(charStream), (tokenStream: CommonTokenStream) => new delphiParser(tokenStream), "file", [])

connection.onInitialize(initialize);
connection.onInitialized(initialized);
connection.onRequest(request);
connection.onNotification(notification);
connection.onCompletion(completion)
//TODO: vscode only available in the client, how to send this info?
connection.onDidChangeConfiguration((params: DidChangeConfigurationParams) => {
	if (fileService.loading === undefined)
		return
	log.write(`configuration Changed: ${JSON.stringify(params)}`)
	fileService.loading = new Promise<void>((resolve, reject) => {
		fileService.readDelhiLspSettings(params.settings["customDelphiLSP"]["projectJsonPath"])
			.then(resolve, reject)
			.then(() => fileService.loading = undefined)
	});
})
connection.onHover(service.doHover)
//connection.onCompletion
fileService.init(connection);

// Listen on the connection
connection.listen();