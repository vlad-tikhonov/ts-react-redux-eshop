import {  AxiosResponse } from 'axios'
import makeRequest from "api/makeRequest";
import { Login, RegisterPayload, RegisterResponse } from "types";


export const register = (data: RegisterPayload) => {
	return makeRequest({
		url: '/auth/register',
		method: 'post',
		data
	}).then((response: AxiosResponse<RegisterResponse>) => response.data)
}

export const login = (login: string, password: string) => {
	return makeRequest({
		url: '/auth/login',
		method: 'post',
		data: {
			login,
			password,
		}
	}).then((response: AxiosResponse<Login>) => response.data)
}
