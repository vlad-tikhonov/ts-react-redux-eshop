import axios from './axios'
import { Product,ProductWithRelated } from 'types'
import { AxiosResponse } from 'axios';

export const getProduct = (slug: string): Promise<ProductWithRelated> => {
  return axios.get(`/product/bySlug/${slug}`)
		.then((response: AxiosResponse<ProductWithRelated>) =>
			response.data)
}

export const getProducts = (slug: string): Promise<Product[]> => {
  return axios.post('/product/bySlug', { categorySlug: slug})
		.then((response: AxiosResponse<Product[]>) =>
			response.data
		)
}

