import axios from './axios'
import { ProductWithReviews,ProductWithReviewsAndRelated } from 'types'
import { AxiosResponse } from 'axios';

export const getProduct = (slug: string): Promise<ProductWithReviewsAndRelated> => {
  return axios.get(`/product/bySlug/${slug}`)
		.then((response: AxiosResponse<ProductWithReviewsAndRelated>) =>
			response.data)
}

export const getProducts = (slug: string): Promise<ProductWithReviews[]> => {
  return axios.post('/product/bySlug', { categorySlug: slug})
		.then((response: AxiosResponse<ProductWithReviews[]>) =>
			response.data
		)
}

