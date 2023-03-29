import { createSlice } from "@reduxjs/toolkit";

type ModalsSlice = {
	isShowAuthModal: boolean;
	isShowCatalogDropdown: boolean;
}

const initialState: ModalsSlice = {
	isShowAuthModal: false,
	isShowCatalogDropdown: false,
}

const modalsSlice = createSlice({
	name: "@@modals",
	initialState,
	reducers: {
		toggleAuthModal: (state) => {
			state.isShowAuthModal = !state.isShowAuthModal
		},
		closeAuthModal: (state) => {
			state.isShowAuthModal = false
		},
		toggleCatalogDropdown: (state) => {
			state.isShowCatalogDropdown = !state.isShowCatalogDropdown
		},
		closeCatalogDropdown: (state) => {
			state.isShowCatalogDropdown = false
		}
	},
})

export const {
	toggleAuthModal,
	closeAuthModal,
	toggleCatalogDropdown,
	closeCatalogDropdown
} = modalsSlice.actions

export const modalsReducer = modalsSlice.reducer