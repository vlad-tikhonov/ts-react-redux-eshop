import {RootState} from 'app/store'

export const selectPromotionsInfo = (state: RootState) => ({
	isLoading: state.promotions.isLoading,
	error: state.promotions.error,
})

export const selectAllPromotionsProducts = (state: RootState) => state.promotions.data
