import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Extra, SearchItem } from "types";

type SearchSlice = {
	data: SearchItem[];
	error: string | null;
	isLoading: boolean
}

const initialState: SearchSlice = {
	data: [],
	error: null,
	isLoading: false,
}

export const loadSearchResults = createAsyncThunk<
  SearchItem[],
  string,
  {
    state: { search: SearchSlice };
    extra: Extra;
    rejectValue: string;
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
				state.error = null
			})
			.addCase(loadSearchResults.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Cannot load data";
			})
			.addCase(loadSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
			})
	}
})

export const { resetSearch } = searchSlice.actions
export const searchReducer = searchSlice.reducer