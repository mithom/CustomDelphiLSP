export interface DelphiLspConfig {
	settings: Settings
}

interface Settings {
	project: string,
	dllname: string,
	dccOptions: string,
	projectFiles: File[],
	includeDCUsInUsesCompletion: boolean,
	enableKeyWordCompletion: boolean,
	browsingPaths: string[],
	CommonAppData: string,
	Templates: string
}

interface File {
	name: string,
	file: string
}