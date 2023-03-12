import { Rating } from 'types'

export type Review = {
	_id: string;
	name: string;
	description: string;
	rating: Rating;
	productId: string;
	createdAt: string;
}

export type CreateReview = {
	name: string;
	description: string;
	rating: number;
	productId: string;
}