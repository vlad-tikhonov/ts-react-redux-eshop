import axios from "./axios";

export const login = (login: string, password: string) => {
	return axios.post('/auth/login', { login, password })
}