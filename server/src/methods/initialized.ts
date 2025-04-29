import { CancellationToken, ConfigurationParams, ConfigurationRequest, DidChangeConfigurationNotification, InitializedParams } from "vscode-languageserver";
import { connection } from "../server"
import { hasConfigurationCapability, hasWorkspaceFolderCapability } from "./initialize"
import { fileService } from "../fileService";
import log from "../log";
import { resolve } from "path";

export function initialized(params: InitializedParams): void {
	//read out delphilsp.json file
	// let settings = vscode.workspace.getConfiguration('CustomDelphiLSP')
	// fileService.readDelhiLspSettings(settings.get("delphiLspJsonPath", ""))

	log.write("initialized")

	 //how about initial configuration read?

	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, {section: "customDelphiLSP"});
		
		if (fileService.loading !== undefined)
			return
		fileService.loading = new Promise<void>((resolve, reject) => {
			connection.workspace.getConfiguration({
				section: "customDelphiLSP",
				scopeUri: "machine"
			}).then((settings) => {
				log.write(`configuration received: ${JSON.stringify(settings)}`);
				fileService.readDelhiLspSettings(settings["projectJsonPath"])
					.then(resolve, reject)
					.then(() => fileService.loading = undefined)
			});
		});
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
			//TODO
		});
	}
}