import makeRequest from '../makeRequest'
import { ProductWithReviewsInfo, ProductWithReviewsInfoAndRelated } from 'types'
import { AxiosResponse } from 'axios';

export const getProduct = (slug: string): Promise<ProductWithReviewsInfoAndRelated> => {
	return makeRequest({
		url: `/product/bySlug/${slug}`,
		method: 'get',
	})
	.then((response: AxiosResponse<ProductWithReviewsInfoAndRelated>) => response.data)
}

export const getProducts = (slug: string): Promise<ProductWithReviewsInfo[]> => {
	return makeRequest({
		url: '/product/bySlug',
		method: 'post',
		data: {
			categorySlug: slug
		}
	}).then((response: AxiosResponse<ProductWithReviewsInfo[]>) => response.data)
}

export const getPromotionProducts = (): Promise<ProductWithReviewsInfo[]> => {
	return makeRequest({
		url: '/product/promotions',
		method: 'get',
	}).then((response: AxiosResponse<ProductWithReviewsInfo[]>) => response.data)
}

export const getNoveltiesProducts = (): Promise<ProductWithReviewsInfo[]> => {
	return makeRequest({
		url: '/product/novelties',
		method: 'get',
	}).then((response: AxiosResponse<ProductWithReviewsInfo[]>) => response.data)
}

