import axios from './axios'
import { ProductWithReviewsInfo, ProductWithReviewsInfoAndRelated } from 'types'
import { AxiosResponse } from 'axios';

export const getProduct = (slug: string): Promise<ProductWithReviewsInfoAndRelated> => {
  return axios.get(`/product/bySlug/${slug}`)
		.then((response: AxiosResponse<ProductWithReviewsInfoAndRelated>) =>
			response.data)
}

export const getProducts = (slug: string): Promise<ProductWithReviewsInfo[]> => {
  return axios.post('/product/bySlug', { categorySlug: slug})
		.then((response: AxiosResponse<ProductWithReviewsInfo[]>) =>
			response.data
		)
}

export const getPromotionProducts = (): Promise<ProductWithReviewsInfo[]> => {
  return axios.get('/product/promotions')
		.then((response: AxiosResponse<ProductWithReviewsInfo[]>) =>
			response.data
		)
}

export const getNoveltiesProducts = (): Promise<ProductWithReviewsInfo[]> => {
  return axios.get('/product/novelties')
		.then((response: AxiosResponse<ProductWithReviewsInfo[]>) =>
			response.data
		)
}

