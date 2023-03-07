import {Review, Rating} from 'types'

export type ProductDescription = {
	brand: string;
	country: string;
	package: string;
}

export type Product = {
	_id: string;
	image: string;
	title: string;
	price: number;
	priceWithCard?: number;
	discount?: number;
	description: ProductDescription;
	categoryId: string;
	categoryTitle: string;
	categorySlug: string;
	tags: string[];
	code: string;
	slug: string;
}

export type ProductWithReviews = Product & {
	reviews: Review[];
	reviewsCount: number;
	reviewsAvg: Rating | null;
}

export type ProductWithReviewsAndRelated = ProductWithReviews & { relatedProducts: Product[] }