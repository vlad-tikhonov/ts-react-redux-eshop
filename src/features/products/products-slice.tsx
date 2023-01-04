import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product, Extra } from "types";
import { GetProductsProps } from "api/products";

type ProductsSlice = {
  data: Product[];
  error: string | null;
  isLoading: boolean;
};

const initialState: ProductsSlice = {
  data: [],
  isLoading: false,
  error: null,
};

export const loadProducts = createAsyncThunk<
  Product[],
  GetProductsProps,
  {
    state: { products: ProductsSlice };
    extra: Extra;
    rejectValue: string;
  }
>(
  "@@products/load-products",
  async ({ filters, perPage, page }, { extra: { api }, rejectWithValue }) => {
    try {
      return api.getProducts({ filters, perPage, page });
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
      return rejectWithValue("Unknown error");
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        products: { isLoading },
      } = getState();
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
