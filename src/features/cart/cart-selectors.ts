import { RootState } from "app/store"
import { createSelector } from "@reduxjs/toolkit"
import { ProductWithReviewsAndRelated } from "types"

const baseCartSelector = (state: RootState) => state.cart.data

export const selectCartLength = createSelector(
	baseCartSelector,
	(cartData) => cartData.reduce((acc, p) => acc + p.count, 0)
)

export const selectProductCount = (productId: ProductWithReviewsAndRelated['_id']) =>
	createSelector(
		baseCartSelector,
		(cartData) => {
			if (!cartData.length) {
				return 0
			}

			const product = cartData.find(p => p.id === productId)

			return product ? product.count : 0
		}
)

export const selectSelectedCount = createSelector(
	baseCartSelector,
	(cartData) => cartData.reduce((acc, el) => el.isSelected ? acc + 1 : acc, 0)
)

export const selectCartProducts = createSelector(
	baseCartSelector,
	(cartData) => cartData
)
