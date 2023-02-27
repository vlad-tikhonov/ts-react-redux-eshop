import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Extra, User, Login } from 'types'

type AuthSlice = {
	user: User | null,
	token: string | null;
	error: string | null,
	isLoading: boolean,
}

const initialState: AuthSlice = {
	user: null,
	token: null,
	error: null,
	isLoading: false,
}

export const login = createAsyncThunk<
	Login,
	{email: string, password: string},
	{
		state: { auth: AuthSlice },
		extra: Extra,
		rejectValue: string,
	}>
	(
		"@@auth/login",
		async({email, password}, { extra: { api }, rejectWithValue}) => {
			try {
				return await api.login(email, password)
			} catch (e) {
				console.log(e);
				if (e instanceof Error){
					return rejectWithValue(e.message)
				}
			return rejectWithValue('Unknown error')
			}
		},
		{
			condition: (_, {getState}) => {
				const {auth: {isLoading}} = getState()
				if (isLoading){
					return false
				}
			}
		}
	)

const authSlice = createSlice({
	name: "@@login",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true
				state.error = null
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false
				console.log(action.payload);
				state.error = action.payload || "Cannot load data"
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false
				state.token = action.payload.access_token
				state.user = action.payload.user
			})
	}
})

export const authReducer = authSlice.reducer