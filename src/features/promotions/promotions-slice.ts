import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductWithReviewsAvg, Extra } from "types";

type PromotionSlice = {
  data: ProductWithReviewsAvg[];
  error: string | null;
  isLoading: boolean;
};

const initialState: PromotionSlice = {
  data: [],
  isLoading: false,
  error: null,
};

export const loadPromotionProducts = createAsyncThunk<
  ProductWithReviewsAvg[],
  {slug: string},
  {
    state: { promotion: PromotionSlice };
    extra: Extra;
    rejectValue: string;
  }
>(
  "@@promotion/load-promotion",
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
      const { promotion: { isLoading } } = getState();
      if (isLoading) {
        return false;
      }
    },
  }
);

const promotionSlice = createSlice({
  name: "@@promotion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPromotionProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadPromotionProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Cannot load data";
      })
      .addCase(loadPromotionProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export const productsReducer = promotionSlice.reducer;
