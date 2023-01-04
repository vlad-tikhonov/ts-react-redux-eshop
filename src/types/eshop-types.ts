export enum Rating {
	Zero,
  One,
  Two,
  Three,
  Four,
  Five,
}

export type Category = {
	_id: number;
	title: string;
	_img: string;
	slug: string;
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
	discount?: number;
}