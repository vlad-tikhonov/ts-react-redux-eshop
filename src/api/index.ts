import * as auth from './rest/auth'
import * as product from './rest/product'
import * as category from './rest/category'
import * as search from './rest/search'
import * as reviews  from './rest/reviews'
import { setToken } from './config'

const api = {
	auth,
	product,
	category,
	search,
	reviews
}

export default api
export { setToken }