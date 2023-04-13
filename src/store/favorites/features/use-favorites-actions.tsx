import { useAppDispatch } from "store/hooks";
import { ProductWithReviewsInfo } from "types";
import {
  initFavorites,
  addToFavorites,
  removeFromFavorites,
} from "store/favorites/favorites-slice";
import { useCallback } from "react";

export const useFavoritesActions = () => {
  const dispatch = useAppDispatch();

  const init = useCallback(() => {
    dispatch(initFavorites());
  }, [dispatch]);

  const add = useCallback(
    (product: ProductWithReviewsInfo | null) => {
      if (!product) {
        return;
      }

      dispatch(addToFavorites(product));
    },
    [dispatch]
  );

  const remove = useCallback(
    (productId: ProductWithReviewsInfo["_id"] | undefined) => {
      if (!productId) {
        return;
      }

      dispatch(removeFromFavorites(productId));
    },
    [dispatch]
  );

  return {
    init,
    add,
    remove,
  };
};
