type Config = {
	token: string | null;
}

const config: Config = {
	token: null,
};

export const setToken = (token: Config['token']): void => {
	config.token = token
}

export default config