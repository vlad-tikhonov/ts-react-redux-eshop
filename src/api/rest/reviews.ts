import makeRequest from 'api/makeRequest'
import {  Review, Product, CreateReview } from 'types'
import { AxiosResponse } from 'axios';

export const getReviews = (productId: Product['_id']) => {
	return makeRequest({
		url: `review/byProduct/${productId}`,
		method: 'get',
	}).then((response: AxiosResponse<Review[]>) => response.data)
}

export const createReview = (review: CreateReview): Promise<Review> => {
	return makeRequest({
		url: '/review/create',
		method: 'post',
		data: review,
		headers: { auth: true },
	}).then((response: AxiosResponse<Review>) => response.data)
}