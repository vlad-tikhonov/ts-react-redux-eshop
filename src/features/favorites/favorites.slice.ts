import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductWithReviews } from 'types'
import { getItem, setItem} from 'helpers/persistenceStorage'
import { PERSISTENCE_STORAGE_FAVORITES_KEY } from 'constants/persistence-storage'


type FavoritesSlice = {
	data: ProductWithReviews[],
}

const initialState: FavoritesSlice = {
	data: [],
}

const favoritesSlice = createSlice({
	name: "@@favorites",
	initialState,
	reducers: {
		initFavorites: (state) => {
			const cart = getItem<FavoritesSlice['data']>(PERSISTENCE_STORAGE_FAVORITES_KEY)

			if (!cart) {
				return
			}

			state.data = cart
		},
		addToFavorites: (state, action: PayloadAction<ProductWithReviews>) => {
			state.data.push(action.payload)
			setItem(PERSISTENCE_STORAGE_FAVORITES_KEY, state.data)
		},
		removeFromFavorites: (state, action: PayloadAction<ProductWithReviews['_id']>) => {
			state.data = state.data.filter(p => p._id !== action.payload)
			setItem(PERSISTENCE_STORAGE_FAVORITES_KEY, state.data)
		}
	},
})

export const { initFavorites, addToFavorites, removeFromFavorites } = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer