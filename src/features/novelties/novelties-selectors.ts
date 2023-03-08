import {RootState} from 'app/store'

export const selectNoveltiesInfo = (state: RootState) => ({
	isLoading: state.promotions.isLoading,
	error: state.promotions.error,
})

export const selectNoveltiesProducts = (state: RootState) => state.novelties.data
