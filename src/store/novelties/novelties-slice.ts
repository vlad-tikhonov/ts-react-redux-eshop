import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductWithReviewsInfo, Extra } from "types";

type NoveltiesSlice = {
  data: ProductWithReviewsInfo[];
  errors: string[];
  isLoading: boolean;
};

const initialState: NoveltiesSlice = {
  data: [],
  isLoading: false,
  errors: [],
};

export const loadNoveltiesProducts = createAsyncThunk<
  ProductWithReviewsInfo[],
	undefined,
	{
    state: { novelties: NoveltiesSlice };
    extra: Extra;
    rejectValue: string[];
  }
>(
  "@@novelties/load-novelties",
  async (_, { extra: { api, errorHandler }, rejectWithValue }) => {
    try {
      return await api.product.getNoveltiesProducts();
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
        state.errors = [];
      })
      .addCase(loadNoveltiesProducts.rejected, (state, action) => {
        state.isLoading = false;

				if (action.payload) {
					state.errors = action.payload
				} else {
					state.errors.push('Cannot load data - unknown error')
				}
      })
      .addCase(loadNoveltiesProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export const noveltiesReducer = noveltiesSlice.reducer;
