import { useAppDispatch } from "store/hooks";
import { ProductWithReviewsInfo } from "types";
import {
  initFavorites,
  addToFavorites,
  removeFromFavorites,
} from "store/favorites/favorites-slice";

export const useFavoritesActions = () => {
  const dispatch = useAppDispatch();

  const init = () => {
    dispatch(initFavorites());
  };

  const add = (product: ProductWithReviewsInfo | null) => {
    if (!product) {
      return;
    }

    dispatch(addToFavorites(product));
  };

  const remove = (productId: ProductWithReviewsInfo["_id"] | undefined) => {
    if (!productId) {
      return;
    }

    dispatch(removeFromFavorites(productId));
  };

  return {
    init,
    add,
    remove,
  };
};
