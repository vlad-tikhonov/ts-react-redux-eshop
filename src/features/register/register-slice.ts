import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Extra, RegisterData, RegisterResponse } from 'types'

type RegisterSlice = {
	user: RegisterResponse | null,
	errors: string[],
	isLoading: boolean,
}

const initialState: RegisterSlice = {
	user: null,
	errors: [],
	isLoading: false,
}

export const registerUser = createAsyncThunk<
	RegisterResponse,
	RegisterData,
	{
		state: { register: RegisterSlice },
		extra: Extra,
		rejectValue: string | string[],
	}>
	(
		"@@register/register",
		async(registerData, { extra: { api, errorHandler }, rejectWithValue}) => {
			try {
				return await api.register(registerData)
			} catch (e) {
				const message = errorHandler(e)

				return rejectWithValue(message)
			}
		},
		{
			condition: (_, {getState}) => {
				const {register: {isLoading}} = getState()
				if (isLoading){
					return false
				}
			}
		}
	)

const registerSlice = createSlice({
	name: "@@register",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true
				state.errors = []
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false

				if (Array.isArray(action.payload)) {
					state.errors = action.payload
				} else {
					state.errors.push(action.payload ?? 'Unable to register - unknown error')
				}
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload
			})
	}
})

export const registerReducer = registerSlice.reducer