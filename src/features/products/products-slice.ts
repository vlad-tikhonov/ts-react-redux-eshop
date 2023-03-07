import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Extra, ProductWithReviewsAvg } from "types";

type ProductsSlice = {
  data: ProductWithReviewsAvg[];
  error: string | null;
  isLoading: boolean;
};

const initialState: ProductsSlice = {
  data: [],
  isLoading: false,
  error: null,
};

export const loadProducts = createAsyncThunk<
	ProductWithReviewsAvg[],
  {slug: string},
  {
    state: { products: ProductsSlice };
    extra: Extra;
    rejectValue: string;
  }
>(
  "@@products/load-products",
  async ({ slug }, { extra: { api, errorHandler }, rejectWithValue }) => {
    try {
      return await api.getProducts(slug);
    } catch (e) {
			const message = errorHandler(e)

			return rejectWithValue(message)
    }
  },
  {
    condition: (_, { getState }) => {
      const { products: { isLoading } } = getState();
      if (isLoading) {
        return false;
      }
    },
  }
);

const productsSlice = createSlice({
  name: "@@products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Cannot load data";
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;
