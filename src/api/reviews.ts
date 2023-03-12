import axios from './axios'
import {  Review, Product, CreateReview, Login } from 'types'
import { AxiosResponse } from 'axios';

export const getReviews = (productId: Product['_id']) => {
	return axios
					.get(`review/byProduct/${productId}`)
					.then((response: AxiosResponse<Review[]>) => response.data)
}

export const createReview = (review: CreateReview, token: Login['access_token']): Promise<Review> => {
  return axios.post('/review/create', { ...review }, {
		headers: { Authorization: `Bearer ${token}` }
	})
		.then((response: AxiosResponse<Review>) =>
			response.data)
}