import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { Order, Product } from 'types'

const baseOrdersSelector = (state: RootState) => state.orders

export const selectOrdersInfo = createSelector(
	baseOrdersSelector,
	(orders) => ({
		isLoading: orders.isLoading,
		errors: orders.errors
	})
)

export const selectOrders = createSelector(
	baseOrdersSelector,
	(orders) => orders.data
)

export const selectActiveOrdersCount = createSelector(
	baseOrdersSelector,
	(orders) => orders.data.reduce((acc, o) => o.status === 'inProgress' ? ++acc : acc, 0)
)

export const selectProductCount = (productId: Product['_id'], orderId: Order['_id']) => createSelector(
	baseOrdersSelector,
	(orders) => {
		const order = orders.data.find(o => o._id === orderId)

		if (!order) {
			return 0
		}

		const product = order.products.find(p => p.product._id === productId)

		if (!product) {
			return 0
		}

		return product.count
	}
)

export const selectNewOrder = createSelector(
	baseOrdersSelector,
	(orders) => orders.new
)

export const selectOrdersErrors = createSelector(
	baseOrdersSelector,
	(orders) => orders.errors
)