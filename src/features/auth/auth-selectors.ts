import {RootState} from 'app/store'
import { createSelector } from '@reduxjs/toolkit'

const baseAuthSelector = (state: RootState) => state.auth

export const selectUser = createSelector(
	baseAuthSelector,
	(auth) => auth.user
)

export const selectAuthInfo = createSelector(
	baseAuthSelector,
	(auth) => ({
		isLoading: auth.isLoading,
		error: auth.error,
	})
)

export const selectToken = createSelector(
	baseAuthSelector,
	(auth) => auth.token
)