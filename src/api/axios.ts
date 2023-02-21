import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
// axios.interceptors.request.use((config) => {
//   config.headers = {
//     'X-Api-Key': process.env.REACT_APP_APISFUL_API_KEY,
//   }
//   return config
// })

export default axios
