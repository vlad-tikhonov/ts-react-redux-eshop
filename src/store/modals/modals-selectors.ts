import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'

const baseModalsSelector = (state: RootState) => state.modals

export const selectAuthModalState = createSelector(
	baseModalsSelector,
	(modals) => modals.isShowAuthModal
)

export const selectCatalogMenuState = createSelector(
	baseModalsSelector,
	(modals) => modals.isShowCatalogDropdown
)