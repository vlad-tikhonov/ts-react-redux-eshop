import axios from './axios'
import { Product } from 'types'
import { AxiosResponse } from 'axios';

export const getProducts = (slug: string): Promise<Product[]> => {
  return axios.post('/product/bySlug', { categorySlug: slug})
		.then((response: AxiosResponse<Product[]>) =>
			response.data
		)
}
