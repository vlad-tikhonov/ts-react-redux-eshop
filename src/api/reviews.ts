import axios from './axios'
import {  Review } from 'types'
import { AxiosResponse } from 'axios';

export const createReview = (review: {
	name: string;
	description: string;
	rating: number;
	productId: string;
	token: string;
}): Promise<Review> => {
  return axios.post('/review/create', {
		name: review.name,
		description: review.description,
		rating: review.rating,
		productId: review.productId,
	}, {
		headers: { Authorization: `Bearer ${review.token}` }
	})
		.then((response: AxiosResponse<Review>) =>
			response.data)
}