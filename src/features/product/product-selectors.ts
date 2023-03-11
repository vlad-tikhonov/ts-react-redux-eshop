import { createSelector } from '@reduxjs/toolkit'
import {RootState} from 'app/store'

const baseProductSelector = (state: RootState) => state.product


export const selectProduct = (state: RootState) => state.product.data

export const selectProductInfo = createSelector(
	baseProductSelector,
	(product) => ({
		isLoading: product.isLoading,
		error: product.error
		}
	)
)