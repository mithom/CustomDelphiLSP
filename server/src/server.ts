import {
  createConnection,
  ProposedFeatures
} from "vscode-languageserver/node";

import {initialize} from "./methods/initialize";
import {request} from "./methods/request";
import {notification} from "./methods/notification";
import {fileService} from "./fileService/fileService";
import { initialized } from "./methods/initialized";

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
export const connection = createConnection(ProposedFeatures.all);

connection.onInitialize(initialize);
connection.onInitialized(initialized);
connection.onRequest(request);
connection.onNotification(notification);

const files = new fileService()
files.init(connection);

// Listen on the connection
connection.listen();