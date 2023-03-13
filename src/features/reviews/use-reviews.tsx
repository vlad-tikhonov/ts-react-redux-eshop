import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  selectReviews,
  selectReviewsInfo,
} from "features/reviews/reviews-selectors";
import { loadReviews } from "features/reviews/reviews-slice";
import { Product, Review } from "types";

export const useReviews = (
  productId: Product["_id"]
): [Review[] | null, ReturnType<typeof selectReviewsInfo>] => {
  const dispatch = useAppDispatch();

  const reviews = useAppSelector(selectReviews);
  const { isLoading, error } = useAppSelector(selectReviewsInfo);

  useEffect(() => {
    dispatch(loadReviews(productId));
  }, [productId, dispatch]);

  return [reviews, { isLoading, error }];
};
