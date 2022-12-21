import {RootState} from 'app/store'
import {Category} from 'types/eshop-types'

export const selectCategoriesInfo = (state: RootState) => ({
	isLoading: state.categories.isLoading,
	error: state.categories.error,
})

export const selectAllCategories = (state: RootState) => state.categories.data

export const selectCategory = (state: RootState, slug: Pick<Category, 'slug'>['slug']) =>
	state.categories.data.filter(category => category.slug === slug)[0]