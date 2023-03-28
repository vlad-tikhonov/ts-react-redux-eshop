import { useAppDispatch } from "store/hooks";
import { ProductWithReviewsInfo } from 'types'
import {
  addToFavorites,
  removeFromFavorites,
} from "store/favorites/favorites-slice";

export const useFavoritesActions = ():[
	(product: ProductWithReviewsInfo | null) => void,
	(productId: ProductWithReviewsInfo['_id'] | undefined) => void,
] => {
	const dispatch = useAppDispatch()

	const handleAdd = (product: ProductWithReviewsInfo | null) => {
		if (!product) {
			return
		}

		dispatch(addToFavorites(product))
	}

	const handleRemove = (productId: ProductWithReviewsInfo['_id'] | undefined) => {
		if (!productId) {
			return
		}

    dispatch(removeFromFavorites(productId));
	}

	return [handleAdd, handleRemove]
}