import { RootState } from "store"
import { createSelector } from "@reduxjs/toolkit"
import { ProductWithReviewsInfoAndRelated } from "types"

const baseCartSelector = (state: RootState) => state.cart.data

export const selectProductUnitsCart = createSelector(
	baseCartSelector,
	(cartData) => cartData.length
)

export const selectCartProductsCount = createSelector(
	baseCartSelector,
	(cartData) => cartData.reduce((acc, p) => acc + p.count, 0)
)

export const selectProductCount = (productId: ProductWithReviewsInfoAndRelated['_id']) =>
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

export const selectCartAmountWithDiscount = createSelector(
	baseCartSelector,
	(cartData) => cartData.reduce((acc, p) => p.data.priceWithCard ?
		acc + (p.data.priceWithCard * p.count) :
		acc + (p.data.price * p.count), 0)
)

export const  selectCartFullAmount= createSelector(
	baseCartSelector,
	(cartData) => cartData.reduce((acc, p) => acc + p.data.price * p.count, 0)
)

export const selectCartDiscount = createSelector(
	baseCartSelector,
	(cartData) => cartData.reduce((acc, p) => p.data.priceWithCard ?
		acc + (p.data.priceWithCard - p.data.price) * p.count :
		acc, 0)
)

