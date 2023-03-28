import { useAppDispatch } from "store/hooks";
import { addToCart, decreaseProductCount } from "store/cart/cart-slice";
import { Product } from 'types'

export const useCartActions = () => {
  const dispatch = useAppDispatch();

	const add = (product: Product) => {
    dispatch(addToCart(product));
	}

	const decrease = (productId: Product['_id']) => {
    dispatch(decreaseProductCount(productId));
	}

	return {
		add,
		decrease,
	}
}