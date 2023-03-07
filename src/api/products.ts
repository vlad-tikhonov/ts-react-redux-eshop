import axios from './axios'
import { ProductWithReviewsAvg,ProductWithReviewsAndRelated } from 'types'
import { AxiosResponse } from 'axios';

export const getProduct = (slug: string): Promise<ProductWithReviewsAndRelated> => {
  return axios.get(`/product/bySlug/${slug}`)
		.then((response: AxiosResponse<ProductWithReviewsAndRelated>) =>
			response.data)
}

export const getProducts = (slug: string): Promise<ProductWithReviewsAvg[]> => {
  return axios.post('/product/bySlug', { categorySlug: slug})
		.then((response: AxiosResponse<ProductWithReviewsAvg[]>) =>
			response.data
		)
}

export const getPromotionProducts = (): Promise<ProductWithReviewsAvg[]> => {
  return axios.get('/product/promotions')
		.then((response: AxiosResponse<ProductWithReviewsAvg[]>) =>
			response.data
		)
}

