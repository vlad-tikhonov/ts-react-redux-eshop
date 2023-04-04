import axios, { AxiosRequestConfig } from 'axios'
import config from './config'

const makeRequest = ({url = '/', method = 'get', params = {}, data = {}, headers = {}}: AxiosRequestConfig) => {
	const axiosInstanse = axios.create({
		baseURL: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_BASE_URL : '/api/'
	})

	axiosInstanse.interceptors.response.use(
		function (response) {
			return response;
		},

		function (error) {
			if(error.response.data.message && typeof error.response.data.message === 'string') {
				const customMessage: string[] = [];
				customMessage.push(error.response.data.message)
				error.response.data.message = customMessage
			}

			return Promise.reject(error);
		}
	)

	if (headers && headers.auth) {
		headers.authorization = `Bearer ${config.token}`
	}

	return axiosInstanse({
		url,
		method,
		params,
		data,
		headers
	})
}

export default makeRequest
