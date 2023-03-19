import { AxiosError } from "axios"

export const errorHandler = (e: unknown): string | string[] => {
	if (e instanceof AxiosError && e.response?.data.message){
		return e.response.data.message
	} else if (e instanceof Error) {
		return e.message
	} else {
		return 'Unknown error'
	}
}