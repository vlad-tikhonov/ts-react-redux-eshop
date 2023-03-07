import { Product } from "types"

export type CartProduct = {
	id: Product['_id'];
	count: number;
	data: Product;
	isSelected: boolean;
}