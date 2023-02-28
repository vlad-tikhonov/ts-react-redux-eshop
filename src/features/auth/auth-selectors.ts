import {RootState} from 'app/store'

export const selectAuthInfo = (state: RootState) => ({
	user: state.auth.user,
	isLoading: state.auth.isLoading,
	error: state.auth.error,
})

export const selectToken = (state: RootState) => state.auth.token
