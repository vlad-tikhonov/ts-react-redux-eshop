import { createSelector } from '@reduxjs/toolkit'
import {RootState} from 'app/store'

export const baseProductsSelector = (state: RootState) => state.products

export const selectProducts = (state: RootState) => state.products.data

export const selectProductsInfo = createSelector(
	baseProductsSelector,
	(products) => ({
		isLoading: products.isLoading,
		error: products.error
	})
)