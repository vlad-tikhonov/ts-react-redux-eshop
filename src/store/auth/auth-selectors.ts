import {RootState} from 'store'
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
		errors: auth.errors,
	})
)

export const selectToken = createSelector(
	baseAuthSelector,
	(auth) => auth.token
)

export const selectUserId = createSelector(
	baseAuthSelector,
	(auth) => auth.user?.id
)