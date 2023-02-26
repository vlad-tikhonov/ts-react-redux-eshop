export enum Rating {
	Zero,
  One,
  Two,
  Three,
  Four,
  Five,
}

export type Category = {
	_id: string;
	image: string;
	title: string;
	slug: string;
	orderId: number;
	createdAt: string;
	updatedAt: string;
}

export type Review = {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: Rating;
	productId: string;
	createdAt: string;
}

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
	reviews: Review[];
	reviewsCount: number;
	reviewsAvg: Rating | null
}

export type ProductWithRelated = Product & { relatedProducts: Product[] }
