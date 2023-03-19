import {  AxiosResponse } from 'axios'
import axios from "./axios";
import { Login, RegisterData, RegisterResponse } from "types";

export const login = (login: string, password: string) => {
	return axios
		.post('/auth/login', { login, password })
		.then((response: AxiosResponse<Login>) => response.data)
}

export const register = (data: RegisterData) => {
	return axios
		.post('/auth/register', data)
		.then((response: AxiosResponse<RegisterResponse>) => response.data)
}