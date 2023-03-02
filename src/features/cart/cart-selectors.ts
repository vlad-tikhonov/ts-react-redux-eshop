import { RootState } from "app/store"
import { ProductWithRelated } from "types"

export const selectCartLength = (state: RootState) => state.cart.data.reduce((acc, p) => acc + p.count, 0)

export const selectProductCount = (state: RootState, productId: ProductWithRelated['_id']) => {
	if (!state.cart.data.length) {
		return 0
	}

	const product = state.cart.data.find(p => p.id === productId)

	return product ? product.count : 0
}