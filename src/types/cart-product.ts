import { Product } from "./eshop-types"

export type CartProduct = {
	id: Product['_id'];
	count: number;
	data: Product;
}