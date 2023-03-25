import { ProductWithReviewsInfo } from 'types'

type OrderProductInfo = {
	count: number;
	product: ProductWithReviewsInfo;
}

export type Order = {
	_id: string;
	status: string;
	date: string;
	time: string;
	total: number;
	products: OrderProductInfo[]
}