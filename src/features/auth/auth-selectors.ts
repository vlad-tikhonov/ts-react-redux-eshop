import {RootState} from 'app/store'
import { createSelector } from '@reduxjs/toolkit'

const baseAuthSelector = (state: RootState) => state.auth

export const selectAuthInfo = createSelector(
	baseAuthSelector,
	(state) => ({
		user: state.user,
		isLoading: state.isLoading,
		error: state.error,
	})
)

export const selectToken = (state: RootState) => state.auth.token