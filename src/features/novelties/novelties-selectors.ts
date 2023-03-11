import {RootState} from 'app/store'
import { createSelector } from '@reduxjs/toolkit'

const baseNoveltiesSelector = (state: RootState) => state.novelties

export const selectNoveltiesInfo = createSelector(
	baseNoveltiesSelector,
	(state) => ({
		isLoading: state.isLoading,
		error: state.error
	})
)

export const selectNoveltiesProducts = createSelector(
	baseNoveltiesSelector,
	(state) => state.data
)