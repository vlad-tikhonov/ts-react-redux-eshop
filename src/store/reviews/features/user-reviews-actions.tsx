import { useAppDispatch } from 'store/hooks'
import { ReviewPayload } from 'types'
import { createReview } from 'store/reviews/reviews-slice'

export const useReviewsActions = () => {
	const dispatch = useAppDispatch()

	const create = (payload: ReviewPayload) => {
		return dispatch(createReview(payload))
	}

	return {
		create
	}
}