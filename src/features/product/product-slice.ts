import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Extra, ProductWithReviewsInfoAndRelated } from "types";

type ProductSlice = {
	data: ProductWithReviewsInfoAndRelated | null;
	errors: string[];
	isLoading: boolean
}

const initialState: ProductSlice = {
	data: null,
	errors: [],
	isLoading: false,
}

export const loadProduct = createAsyncThunk<
  ProductWithReviewsInfoAndRelated,
  string,
  {
    state: { product: ProductSlice };
    extra: Extra;
    rejectValue: string[];
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
				state.errors = []
			})
			.addCase(loadProduct.rejected, (state, action) => {
        state.isLoading = false;

				if (action.payload) {
					state.errors = action.payload
				} else {
					state.errors.push('Cannot load data - unknown error')
				}

			})
			.addCase(loadProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
			})
	}
})

export const productReducer = productSlice.reducer