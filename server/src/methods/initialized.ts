import { DidChangeConfigurationNotification, InitializedParams } from "vscode-languageserver";
import { connection } from "../server"
import { hasConfigurationCapability, hasWorkspaceFolderCapability } from "./initialize"

export const initialized = (params: InitializedParams): void => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
}