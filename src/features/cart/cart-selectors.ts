import { RootState } from "app/store"
import { ProductWithReviewsAndRelated } from "types"

export const selectCartLength = (state: RootState) => state.cart.data.reduce((acc, p) => acc + p.count, 0)

export const selectProductCount = (state: RootState, productId: ProductWithReviewsAndRelated['_id']) => {
	if (!state.cart.data.length) {
		return 0
	}

	const product = state.cart.data.find(p => p.id === productId)

	return product ? product.count : 0
}

export const selectSelectedCount = (state: RootState) => state.cart.data.reduce((acc, el) => el.isSelected ? acc + 1 : acc, 0)

export const selectCartProducts = (state: RootState) => state.cart.data