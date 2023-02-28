import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Extra, ProductWithRelated } from "types";

type ProductSlice = {
	data: ProductWithRelated | null;
	error: string | null;
	isLoading: boolean
}

const initialState: ProductSlice = {
	data: null,
	error: null,
	isLoading: false,
}

export const loadProduct = createAsyncThunk<
  ProductWithRelated,
  string,
  {
    state: { product: ProductSlice };
    extra: Extra;
    rejectValue: string;
  }
>(
  "@@product/load-product",
  async (slug, { extra: { api, errorHandler }, rejectWithValue }) => {
    try {
      return await api.getProduct(slug);
    } catch (e) {
			const message = errorHandler(e)

			return rejectWithValue(message)
    }
  },
  {
    condition: (_, { getState }) => {
      const { product: { isLoading } } = getState();
      if (isLoading) {
        return false;
      }
    },
  }
);


const productSlice = createSlice({
	name: "@@product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadProduct.pending, (state) => {
				state.isLoading = true
				state.error = null
			})
			.addCase(loadProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Cannot load data";
			})
			.addCase(loadProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
			})
	}
})

export const productReducer = productSlice.reducer