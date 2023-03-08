import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductWithReviewsAvg, Extra } from "types";

type NoveltiesSlice = {
  data: ProductWithReviewsAvg[];
  error: string | null;
  isLoading: boolean;
};

const initialState: NoveltiesSlice = {
  data: [],
  isLoading: false,
  error: null,
};

export const loadNoveltiesProducts = createAsyncThunk<
  ProductWithReviewsAvg[],
	undefined,
	{
    state: { novelties: NoveltiesSlice };
    extra: Extra;
    rejectValue: string;
  }
>(
  "@@novelties/load-novelties",
  async (_, { extra: { api, errorHandler }, rejectWithValue }) => {
    try {
      return await api.getNoveltiesProducts();
    } catch (e) {
			const message = errorHandler(e)

			return rejectWithValue(message)
    }
  },
  {
    condition: (_, { getState }) => {
      const { novelties: { isLoading } } = getState();
      if (isLoading) {
        return false;
      }
    },
  }
);

const noveltiesSlice = createSlice({
  name: "@@novelties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadNoveltiesProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadNoveltiesProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Cannot load data";
      })
      .addCase(loadNoveltiesProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export const noveltiesReducer = noveltiesSlice.reducer;
