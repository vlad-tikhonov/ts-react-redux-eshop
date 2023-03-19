import {  AxiosResponse } from 'axios'
import axios from "./axios";
import { Login, RegisterData, RegisterResponse } from "types";

export const login = (login: string, password: string) => {
	return axios
		.post('/auth/login', { login, password })
		.then((response: AxiosResponse<Login>) => response.data)
}

export const register = (dto: RegisterData) => {
	return axios
		.post('/auth/register', { ...dto })
		.then((response: AxiosResponse<RegisterResponse>) => response.data)
}