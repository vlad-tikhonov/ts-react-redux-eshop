import { useAppDispatch } from "store/hooks";
import { ReviewPayload } from "types";
import { createReview } from "store/reviews/reviews-slice";
import { useCallback } from "react";

export const useReviewsActions = () => {
  const dispatch = useAppDispatch();

  const create = useCallback(
    (payload: ReviewPayload) => {
      return dispatch(createReview(payload));
    },
    [dispatch]
  );

  return {
    create,
  };
};
