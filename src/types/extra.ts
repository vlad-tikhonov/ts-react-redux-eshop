import api from 'api'
import { errorHandler } from 'helpers/errorHandler'

export type Extra = {
	api: typeof api;
	errorHandler: typeof errorHandler;
}