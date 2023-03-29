import api from 'api'
import { errorHandler } from 'helpers/error-handler'

export type Extra = {
	api: typeof api;
	errorHandler: typeof errorHandler;
}