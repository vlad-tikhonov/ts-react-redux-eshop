import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Extra, ProductWithReviewsInfo } from "types";

type ProductsSlice = {
  data: ProductWithReviewsInfo[];
  errors: string[];
  isLoading: boolean;
};

const initialState: ProductsSlice = {
  data: [],
  isLoading: false,
  errors: [],
};

export const loadProducts = createAsyncThunk<
	ProductWithReviewsInfo[],
  {slug: string},
  {
    state: { products: ProductsSlice };
    extra: Extra;
    rejectValue: string | string[];
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
        state.errors = [];
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false;

				if (Array.isArray(action.payload)) {
					state.errors = action.payload
				} else {
					state.errors.push(action.payload ?? 'Cannot load data - unknown error')
				}
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;
