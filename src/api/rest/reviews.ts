import makeRequest from 'api/makeRequest'
import {  Review, Product, ReviewPayload } from 'types'
import { AxiosResponse } from 'axios';

export const getReviews = (productId: Product['_id']) => {
	return makeRequest({
		url: `review/byProduct/${productId}`,
		method: 'get',
	}).then((response: AxiosResponse<Review[]>) => response.data)
}

export const createReview = (review: ReviewPayload): Promise<Review> => {
	return makeRequest({
		url: '/review/create',
		method: 'post',
		data: review,
		headers: { auth: true },
	}).then((response: AxiosResponse<Review>) => response.data)
}