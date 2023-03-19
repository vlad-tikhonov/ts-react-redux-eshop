import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Extra, Login, Review, CreateReview } from "types";

type ReviewsSlice = {
	data: Review[];
	errors: string[];
	isLoading: boolean
}

const initialState: ReviewsSlice = {
	data: [],
	errors: [],
	isLoading: false,
}

export const loadReviews = createAsyncThunk<
  Review[],
  string,
  {
    state: { reviews: ReviewsSlice };
    extra: Extra;
    rejectValue: string | string[];
  }
>(
  "@@reviews/load-reviews",
  async (productId, { extra: { api, errorHandler }, rejectWithValue }) => {
    try {
      return await api.getReviews(productId);
    } catch (e) {
			const message = errorHandler(e)

			return rejectWithValue(message)
    }
  },
  {
    condition: (_, { getState }) => {
      const { reviews: { isLoading } } = getState();
      if (isLoading) {
        return false;
      }
    },
  }
);

export const createReview = createAsyncThunk<
  Review,
  {review: CreateReview; token: Login['access_token']},
  {
    state: { reviews: ReviewsSlice };
    extra: Extra;
    rejectValue: string | string[];
  }
>(
  "@@reviews/create-review",
  async ({ review, token }, { extra: { api, errorHandler }, rejectWithValue }) => {
    try {
      return await api.createReview(review, token);
    } catch (e) {
			const message = errorHandler(e)

			return rejectWithValue(message)
    }
  },
  {
    condition: (_, { getState }) => {
      const { reviews: { isLoading } } = getState();
      if (isLoading) {
        return false;
      }
    },
  }
);


const reviewsSlice = createSlice({
	name: "@@reviews",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadReviews.pending, (state) => {
				state.isLoading = true
				state.errors = []
			})
			.addCase(loadReviews.rejected, (state, action) => {
        state.isLoading = false;

				if (Array.isArray(action.payload)) {
					state.errors = action.payload
				} else {
					state.errors.push(action.payload ?? 'Cannot load data - unknown error')
				}
			})
			.addCase(loadReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
			})
			.addCase(createReview.pending, (state) => {
				state.isLoading = true
				state.errors = []
			})
			.addCase(createReview.rejected, (state, action) => {
        state.isLoading = false;

				if (Array.isArray(action.payload)) {
					state.errors = action.payload
				} else {
					state.errors.push(action.payload ?? 'Cannot load data - unknown error')
				}
			})
			.addCase(createReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload)
			})
	}
})

export const reviewsReducer = reviewsSlice.reducer