import { useAppSelector } from 'store/hooks'
import { selectProductCount } from "store/cart/cart-selectors";
import { Product } from 'types';


export const useProductCount = (productId: Product['_id']): number => {
	return useAppSelector(selectProductCount(productId))
}