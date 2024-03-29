import { Rating } from 'types'

export type Review = {
	_id: string;
	name: string;
	description: string;
	rating: Rating;
	productId: string;
	createdAt: string;
}