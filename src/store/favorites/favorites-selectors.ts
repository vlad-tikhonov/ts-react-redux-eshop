import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "store"
import { Product } from "types"

const baseFavoritesSelector = (state: RootState) => state.favorites

export const selectIsInFavorites = (productId: Product['_id']) => createSelector(
	baseFavoritesSelector,
	(favorites) => {
		const product = favorites.data.find(p => p._id === productId)

		return !!product
	}
)

export const selectFavoritesLength = createSelector(
	baseFavoritesSelector,
	(favorites) => favorites.data.length
)

export const selectFavorites = createSelector(
	baseFavoritesSelector,
	(favorites) => favorites.data
)
