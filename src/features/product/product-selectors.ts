import {RootState} from 'app/store'

export const selectProduct = (state: RootState) => state.product.data

export const selectProductInfo = (state: RootState) => ({
	isLoading: state.product.isLoading,
	error: state.product.error
})