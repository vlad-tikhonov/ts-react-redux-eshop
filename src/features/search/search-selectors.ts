import {RootState} from 'app/store'

export const selectSearchResults = (state: RootState) => state.search.data

export const selectSearchInfo = (state: RootState) => ({
	isLoading: state.search.isLoading,
	error: state.search.error
})