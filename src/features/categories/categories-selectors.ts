import { createSelector } from '@reduxjs/toolkit'
import {RootState} from 'app/store'
import {Category} from 'types'

const baseCategoriesSelector = (state: RootState) => state.categories

export const selectCategoriesInfo = createSelector(
	baseCategoriesSelector,
	(categories) => ({
		isLoading: categories.isLoading,
		error: categories.error,
	})
)

export const selectAllCategories = createSelector(
	baseCategoriesSelector,
	(categories) => categories.data
)

export const selectCategory = (slug: Category['slug'] | undefined) => createSelector(
	baseCategoriesSelector,
	(categories) => categories.data.filter(category => category.slug === slug)[0]
)