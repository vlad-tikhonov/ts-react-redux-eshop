import { createSelector } from '@reduxjs/toolkit'
import {RootState} from 'store'

export const baseProductsSelector = (state: RootState) => state.products

export const selectProducts = createSelector(
	baseProductsSelector,
	(products) => products.data
)

export const selectProductsInfo = createSelector(
	baseProductsSelector,
	(products) => ({
		isLoading: products.isLoading,
		errors: products.errors
	})
)