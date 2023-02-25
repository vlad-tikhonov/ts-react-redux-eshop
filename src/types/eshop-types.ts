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
	categorySlug: string;
	tags: string[];
	code: string;
	rating: number | null
	slug: string;
}