import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

const baseReviewsSelector = (state: RootState) => state.reviews

export const selectReviewsInfo = createSelector(
	baseReviewsSelector,
	(reviews) => ({
		isLoading: reviews.isLoading,
		errors: reviews.errors
	})
)

export const selectReviews = createSelector(
	baseReviewsSelector,
	(reviews) => reviews.data.slice().sort((a, b) => new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1)
)