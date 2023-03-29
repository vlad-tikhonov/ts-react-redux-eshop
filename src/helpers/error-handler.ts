import { AxiosError } from "axios"

export const errorHandler = (e: unknown): string[] => {
	if (e instanceof AxiosError && e.response?.data.message){
		return e.response.data.message
	} else if (e instanceof Error) {
		return new Array(e.message)
	} else {
		return new Array('Unknown error')
	}
}