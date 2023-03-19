import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductWithReviewsInfo, Extra } from "types";

type PromotionSlice = {
  data: ProductWithReviewsInfo[];
  errors: string[];
  isLoading: boolean;
};

const initialState: PromotionSlice = {
  data: [],
  isLoading: false,
  errors: [],
};

export const loadPromotionsProducts = createAsyncThunk<
  ProductWithReviewsInfo[],
	undefined,
	{
    state: { promotions: PromotionSlice };
    extra: Extra;
    rejectValue: string[];
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
        state.errors = [];
      })
      .addCase(loadPromotionsProducts.rejected, (state, action) => {
        state.isLoading = false;

				if (action.payload) {
					state.errors = action.payload
				} else {
					state.errors.push('Cannot load data - unknown error')
				}
      })
      .addCase(loadPromotionsProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export const promotionsReducer = promotionsSlice.reducer;
