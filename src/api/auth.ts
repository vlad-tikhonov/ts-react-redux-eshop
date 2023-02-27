import {  AxiosResponse } from 'axios'
import axios from "./axios";
import { Login } from "types";

export const login = (login: string, password: string) => {
	return axios
		.post('/auth/login', { login, password })
		.then((response: AxiosResponse<Login>) => response.data)
}