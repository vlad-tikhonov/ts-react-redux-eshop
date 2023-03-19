import {RootState} from 'app/store'
import { createSelector } from '@reduxjs/toolkit'

const baseNoveltiesSelector = (state: RootState) => state.novelties

export const selectNoveltiesInfo = createSelector(
	baseNoveltiesSelector,
	(novelties) => ({
		isLoading: novelties.isLoading,
		errors: novelties.errors
	})
)

export const selectNoveltiesProducts = createSelector(
	baseNoveltiesSelector,
	(novelties) => novelties.data
)