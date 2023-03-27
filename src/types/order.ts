import { ProductWithReviewsInfo } from 'types'

export type OrderStatus = 'inProgress' | 'received' | 'canceled'

type OrderProductInfo = {
	count: number;
	product: ProductWithReviewsInfo;
}

export type Order = {
	_id: string;
	status: OrderStatus;
	date: string;
	time: string;
	total: number;
	products: OrderProductInfo[]
}