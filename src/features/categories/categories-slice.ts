import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {Category, Extra} from 'types'

type CategoriesSlice = {
	data: Category[],
	error: string | null,
	isLoading: boolean,
}

const initialState: CategoriesSlice = {
	data: [],
	isLoading: false,
	error: null
}

export const loadCategories = createAsyncThunk<
	Category[],
	undefined,
	{
		state: {categories: CategoriesSlice},
		extra: Extra,
		rejectValue: string,
	}>
	(
		"@@categories/load-categories",
		async(_, {extra: {api}, rejectWithValue}) => {
			try {
				return api.getCategories()
			} catch (e) {
				if (e instanceof Error){
					return rejectWithValue(e.message)
				}
			return rejectWithValue('Unknown error')
			}
		},
		{
			condition: (_, {getState}) => {
				const {categories: {isLoading}} = getState()
				if (isLoading){
					return false
				}
			}
		}
	)

const categoriesSlice = createSlice({
	name: "@@categories",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadCategories.pending, (state) => {
				state.isLoading = false
				state.error = null
			})
			.addCase(loadCategories.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload || "Cannot load data"
			})
			.addCase(loadCategories.fulfilled, (state, action) => {
				state.isLoading = false
				state.data = action.payload
			})
	}
})

export const categoriesReducer = categoriesSlice.reducer