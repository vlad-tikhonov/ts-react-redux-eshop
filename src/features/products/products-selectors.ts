import {RootState} from 'app/store'

export const selectProducts = (state: RootState) => state.products.data

export const selectProductsInfo = (state: RootState) => ({
	isLoading: state.products.isLoading,
	error: state.products.error
})