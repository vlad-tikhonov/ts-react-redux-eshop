import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  selectPromotionsInfo,
  selectPromotionsProducts,
} from "store/promotions/promotions-selectors";
import { useEffect } from "react";
import { loadPromotionsProducts } from "../promotions-slice";
import { ProductWithReviewsInfo } from "types";

export const usePromotions = (): [
  ProductWithReviewsInfo[],
  ReturnType<typeof selectPromotionsInfo>
] => {
  const dispatch = useAppDispatch();

  const { isLoading, errors } = useAppSelector(selectPromotionsInfo);
  const promotions = useAppSelector(selectPromotionsProducts);

  useEffect(() => {
    if (promotions.length === 0) {
      dispatch(loadPromotionsProducts());
    }
  }, [promotions, dispatch]);

  return [promotions, { isLoading, errors }];
};
