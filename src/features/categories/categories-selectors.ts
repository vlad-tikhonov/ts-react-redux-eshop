import {RootState} from 'app/store'
import {Category} from 'types/eshop-types'

export const selectCategoriesInfo = (state: RootState) => ({
	isLoading: state.categories.isLoading,
	error: state.categories.error,
})

export const selectAllCategories = (state: RootState) => state.categories.data

//reselect?
export const selectCategory = (state: RootState, slug: Category['slug'] | undefined) =>
	state.categories.data.filter(category => category.slug === slug)[0]