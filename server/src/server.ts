import {
  createConnection,
  ProposedFeatures
} from "vscode-languageserver/node";

import { initialize } from "./methods/initialize";
import { request } from "./methods/request";
import { notification } from "./methods/notification";
import { fileService } from "./fileService/fileService";
import { initialized } from "./methods/initialized";
import { LspServer } from "./core/lspServer";

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
export const connection = createConnection(ProposedFeatures.all);
export const server: LspServer = new LspServer();

connection.onInitialize(initialize);
connection.onInitialized(initialized);
connection.onRequest(request);
connection.onNotification(notification);

//connection.onCompletion
const files = new fileService();
files.init(connection);

// Listen on the connection
connection.listen();