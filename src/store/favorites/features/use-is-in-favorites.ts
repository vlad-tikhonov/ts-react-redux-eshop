import { useAppSelector } from "store/hooks";
import { selectIsInFavorites } from "store/favorites/favorites-selectors";
import { Product } from 'types'

export const useIsInFavorites = (productId: Product['_id'] | undefined): boolean => {
	return useAppSelector(selectIsInFavorites(productId))
}