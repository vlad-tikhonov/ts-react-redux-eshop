import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectReviews, selectReviewsInfo } from "./reviews-selectors";
import { loadReviews } from "./reviews-slice";
import { Product, Review } from "types";

export const useReviews = (
  productId: Product["_id"]
): [Review[] | null, ReturnType<typeof selectReviewsInfo>] => {
  const dispatch = useAppDispatch();

  const reviews = useAppSelector(selectReviews);
  const { isLoading, errors } = useAppSelector(selectReviewsInfo);

  useEffect(() => {
    dispatch(loadReviews(productId));
  }, [productId, dispatch]);

  return [reviews, { isLoading, errors }];
};
