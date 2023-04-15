import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Extra, RegisterPayload, RegisterResponse } from 'types'

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
	RegisterPayload,
	{
		state: { register: RegisterSlice },
		extra: Extra,
		rejectValue: string[],
	}>
	(
		"@@register/register",
		async(payload, { extra: { api, errorHandler }, rejectWithValue}) => {
			try {
				return await api.auth.register(payload)
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
	reducers: {
		resetState: () => initialState,
		resetErrors: (state) => {
			state.errors.length = 0
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true
				state.errors = []
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false

				if (action.payload) {
					state.errors = action.payload
				} else {
					state.errors.push('Unable to register - unknown error')
				}
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload
			})
	}
})

export const { resetErrors, resetState } = registerSlice.actions
export const registerReducer = registerSlice.reducer