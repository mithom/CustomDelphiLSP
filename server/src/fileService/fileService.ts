import { Connection, TextDocuments, WorkspaceFolder } from "vscode-languageserver"
import { TextDocument } from "vscode-languageserver-textdocument"
import { didChange, didClose, didOpen, didSave, willSave, willSaveWaitUntil } from "./internal"
import { opendir, readFile } from "fs/promises"
import log from "../log";
import { DelphiLspConfig } from "../delphiService/delphiTypes";
import { connection } from "../server"
import assert from "assert";

class FileService {
	// Create a simple text document manager.
	readonly documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);
	workspaceFolders: WorkspaceFolder[] | null = null;
	delphilspjsonFile?: URL
	projectSettings?: DelphiLspConfig;

	loading? : Promise<void>

	constructor(){

	}

	init(connection: Connection): void {
		this.documents.onDidChangeContent(didChange);
		this.documents.onDidClose(didClose);
		this.documents.onDidOpen(didOpen);
		this.documents.onDidSave(didSave);
		this.documents.onWillSave(willSave);
		this.documents.onWillSaveWaitUntil(willSaveWaitUntil);

		// Make the text document manager listen on the connection
		// for open, change and close text document events
		this.documents.listen(connection);
	}

	async readDelhiLspSettings(path: string){
		if (!path.endsWith(".json"))
			return
		this.delphilspjsonFile = new URL(path);
		let buffer = await readFile(this.delphilspjsonFile, {flag: "r"})
		this.projectSettings = JSON.parse(new TextDecoder().decode(buffer))
	}

	getWorkspaceFolder(uri: string): WorkspaceFolder | undefined {
		var normalizedFileUri
		if (uri !== ''){
			normalizedFileUri = new URL(uri).pathname;
		}else{
			normalizedFileUri = '';
		}

		if (!this.workspaceFolders) return undefined

		if (normalizedFileUri = ''){
			return this.workspaceFolders[0];
		}

		for (const folder of this.workspaceFolders) {
			const folderUrl = new URL(folder.uri)
			const normalizedFolderUri = folderUrl.pathname || ''
			if (normalizedFileUri.startsWith(normalizedFolderUri)) {
				return folder
			}
		}
	}

	public async findUserFile(namespace: string): Promise<TextDocument | undefined> {
		if (this.loading === undefined){
			this.loading = new Promise<void>((resolve, reject) => {
				connection.workspace.getConfiguration({
					section: "customDelphiLSP",
					scopeUri: "machine"
				}).then((settings) => {
					log.write(`configuration received: ${JSON.stringify(settings)}`);
					this.readDelhiLspSettings(settings["projectJsonPath"])
						.then(resolve, reject)
						.then(()=> this.loading = undefined)
				});
			});
		}
		await this.loading;
		assert(this.projectSettings !== undefined)
		for (let file of this.projectSettings!.settings.projectFiles) {
			if (file.name === namespace) {
				let buffer = await readFile(new URL(file.file), {
					flag: "r"
				});
				return TextDocument.create(file.file, 'objectpascal', 0, new TextDecoder().decode(buffer));
			}
		}
		return undefined;
	}

	public async findWorkspaceFile(namespace: string): Promise<TextDocument | undefined> {
		return this.findWorkspaceFile_(namespace);
	}

	private async findWorkspaceFile_(namespace: string, folder?: URL): Promise<TextDocument | undefined> {
		if (folder === undefined)
			folder = new URL(this.getWorkspaceFolder('')?.uri || '');
		const dir = await opendir(folder);
		for await (const dirent of dir) {
			if (dirent === null)
				break
			if (dirent.isFile() && dirent.name.toLocaleLowerCase() === `${namespace.toLocaleLowerCase()}.pas`) {
				let buffer = await readFile(dirent.path, {
					flag: "r"
				})
				return TextDocument.create(dirent.path, 'objectpascal', 0, new TextDecoder().decode(buffer))
			}
			if (dirent.isDirectory()) {
				let result = await this.findWorkspaceFile_(namespace, new URL(dirent.path))
				if (!result) return result
			}
		}

		return undefined
	}

	public async findSystemFile (namespace: string): Promise<TextDocument | undefined> {
		if (!this.projectSettings || !this.projectSettings.settings) return undefined;
		for (let path of this.projectSettings.settings.browsingPaths) {
			this.findSystemFile_(namespace, path)
		}
		return 
	}

	private async findSystemFile_ (namespace: string, folder: string): Promise<TextDocument | undefined> {
		const dir = await opendir(folder);
		for await (const dirent of dir) {
			const dirent = await dir.read();
			if (dirent === null)
				break
			if (dirent.isFile() && dirent.name.toLocaleLowerCase() === `${namespace.toLocaleLowerCase()}.pas`) {
				let buffer = await readFile(dirent.path, {
					flag: "r"
				})
				return TextDocument.create(dirent.path, 'objectpascal', 0, new TextDecoder().decode(buffer))
			}
			if (dirent.isDirectory()) {
				let result = await this.findSystemFile_(namespace, dirent.path)
				if (!result) return result
			}
		}
		return undefined;
	}
}

export const fileService = new FileService();