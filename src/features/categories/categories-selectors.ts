import {RootState} from 'app/store'

export const selectCategoriesInfo = (state: RootState) => ({
	isLoading: state.categories.isLoading,
	error: state.categories.error,
})

export const selectAllCategories = (state: RootState) => state.categories.data