import { RootState } from "app/store"
import { Product } from "types"


export const selectIsInFavorites = (state: RootState, productId: Product['_id']) => {
	const product = state.favorites.data.find(p => p._id === productId)

	return !!product
}

export const selectFavoritesLength = (state: RootState) => state.favorites.data.length

export const selectFavorites = (state: RootState) => state.favorites.data