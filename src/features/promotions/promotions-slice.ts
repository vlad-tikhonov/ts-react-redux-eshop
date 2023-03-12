import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductWithReviewsInfo, Extra } from "types";

type PromotionSlice = {
  data: ProductWithReviewsInfo[];
  error: string | null;
  isLoading: boolean;
};

const initialState: PromotionSlice = {
  data: [],
  isLoading: false,
  error: null,
};

export const loadPromotionsProducts = createAsyncThunk<
  ProductWithReviewsInfo[],
	undefined,
	{
    state: { promotions: PromotionSlice };
    extra: Extra;
    rejectValue: string;
  }
>(
  "@@promotions/load-promotions",
  async (_, { extra: { api, errorHandler }, rejectWithValue }) => {
    try {
      return await api.getPromotionProducts();
    } catch (e) {
			const message = errorHandler(e)

			return rejectWithValue(message)
    }
  },
  {
    condition: (_, { getState }) => {
      const { promotions: { isLoading } } = getState();
      if (isLoading) {
        return false;
      }
    },
  }
);

const promotionsSlice = createSlice({
  name: "@@promotions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPromotionsProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadPromotionsProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Cannot load data";
      })
      .addCase(loadPromotionsProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export const promotionsReducer = promotionsSlice.reducer;
