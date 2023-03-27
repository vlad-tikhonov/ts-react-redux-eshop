import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'

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