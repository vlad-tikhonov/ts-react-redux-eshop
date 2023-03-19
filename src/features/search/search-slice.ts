import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Extra, SearchItem } from "types";

type SearchSlice = {
	data: SearchItem[];
	errors: string[];
	isLoading: boolean
}

const initialState: SearchSlice = {
	data: [],
	errors: [],
	isLoading: false,
}

export const loadSearchResults = createAsyncThunk<
  SearchItem[],
  string,
  {
    state: { search: SearchSlice };
    extra: Extra;
    rejectValue: string | string[];
  }
>(
  "@@search/load-results",
  async (query, { extra: { api, errorHandler }, rejectWithValue }) => {
    try {
      return await api.getSearchResult(query);
    } catch (e) {
			const message = errorHandler(e)

			return rejectWithValue(message)
    }
  },
  {
    condition: (_, { getState }) => {
      const { search: { isLoading } } = getState();
      if (isLoading) {
        return false;
      }
    },
  }
);

const searchSlice = createSlice({
	name: "@@search",
	initialState,
	reducers: {
		resetSearch: () => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadSearchResults.pending, (state) => {
				state.isLoading = true
				state.errors = []
			})
			.addCase(loadSearchResults.rejected, (state, action) => {
        state.isLoading = false;

				if (Array.isArray(action.payload)) {
					state.errors = action.payload
				} else {
					state.errors.push(action.payload ?? 'Unable to auth - unknown error')
				}
			})
			.addCase(loadSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
			})
	}
})

export const { resetSearch } = searchSlice.actions
export const searchReducer = searchSlice.reducer