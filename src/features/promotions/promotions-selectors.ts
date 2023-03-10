import {RootState} from 'app/store'
import { createSelector } from '@reduxjs/toolkit'

const basePromotionsSelector = (state: RootState) => state.promotions

export const selectPromotionsInfo = createSelector(
	basePromotionsSelector,
	(state) => ({
		isLoading: state.isLoading,
		error: state.error
	})
)

export const selectPromotionsProducts = createSelector(
	basePromotionsSelector,
	(state) => state.data
)