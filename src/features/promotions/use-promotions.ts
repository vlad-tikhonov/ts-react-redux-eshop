import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectPromotionsInfo, selectPromotionsProducts} from "./promotions-selectors";
import { useEffect } from "react";
import { loadPromotionsProducts } from "./promotions-slice";
import { ProductWithReviewsAvg } from "types";

export const usePromotions = (): [
  ProductWithReviewsAvg[],
  ReturnType<typeof selectPromotionsInfo>
] => {
  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector(selectPromotionsInfo);
  const promotions = useAppSelector(selectPromotionsProducts);

  useEffect(() => {
    if (promotions.length === 0) {
      dispatch(loadPromotionsProducts());
    }
  }, [promotions, dispatch]);

  return [promotions, { isLoading, error }];
};
