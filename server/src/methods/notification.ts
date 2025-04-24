import log from "../log"

export const notification = (method: string, params: any[] | object | undefined) => {
	log.write("NOTIFICATION")
	log.write(method)
	log.write(JSON.stringify(params))
}