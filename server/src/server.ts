import {
  createConnection,
  ProposedFeatures
} from "vscode-languageserver/node";

import {initialize} from "./methods/initialize";
import {request} from "./methods/request";
import {notification} from "./methods/notification";
import {init} from "./fileService/fileService";

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

connection.onInitialize(initialize);
connection.onRequest(request);
connection.onNotification(notification);

init (connection);

// Listen on the connection
connection.listen();
