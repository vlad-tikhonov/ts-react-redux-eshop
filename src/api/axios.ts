import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

axios.interceptors.response.use(
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
);

export default axios
