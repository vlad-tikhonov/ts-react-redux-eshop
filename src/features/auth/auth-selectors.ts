import {RootState} from 'app/store'
import { createSelector } from '@reduxjs/toolkit'

export const selectAuthInfo = (state: RootState) => ({
	user: state.auth.user,
	isLoading: state.auth.isLoading,
	error: state.auth.error,
})

export const selectToken = (state: RootState) => state.auth.token
