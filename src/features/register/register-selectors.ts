import {RootState} from 'app/store'
import { createSelector } from '@reduxjs/toolkit'

const baseRegisterSelector = (state: RootState) => state.register

export const selectUser = createSelector(
	baseRegisterSelector,
	(register) => register.user
)

export const selectRegisterInfo = createSelector(
	baseRegisterSelector,
	(register) => ({
		isLoading: register.isLoading,
		errors: register.errors,
	})
)