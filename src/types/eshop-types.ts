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

export type Product = {
	title: string;
	available: boolean;
	brand: string;
	country: string;
  img: string;
	package: string;
  rating: Rating;
	slug: string;
  price: number;
	category: string;
	_price?: number;
	discount?: number;
}