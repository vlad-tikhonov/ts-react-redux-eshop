import * as API from 'api'
import { errorHandler } from 'helpers/errorHandler'

export type Extra = {
	api: typeof API;
	errorHandler: typeof errorHandler;
}