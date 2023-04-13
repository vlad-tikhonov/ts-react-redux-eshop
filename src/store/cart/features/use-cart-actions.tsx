import { useAppDispatch } from "store/hooks";
import {
  addToCart,
  decreaseProductCount,
  initCart,
  resetCart,
  productSelectionHandler,
  allSelectionHandler,
  removeSelected,
  increaseProductCount,
} from "store/cart/cart-slice";
import { useCallback } from "react";
import { Product, CartProduct } from "types";

export const useCartActions = () => {
  const dispatch = useAppDispatch();

  const init = useCallback(() => {
    dispatch(initCart());
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch(resetCart());
  }, [dispatch]);

  const add = useCallback(
    (product: Product) => {
      dispatch(addToCart(product));
    },
    [dispatch]
  );

  const increase = useCallback(
    (productId: CartProduct["id"]) => {
      dispatch(increaseProductCount(productId));
    },
    [dispatch]
  );

  const decrease = useCallback(
    (productId: Product["_id"]) => {
      dispatch(decreaseProductCount(productId));
    },
    [dispatch]
  );

  const selectionHandler = useCallback(
    (payload: { id: CartProduct["id"]; selectionState: boolean }) => {
      dispatch(productSelectionHandler(payload));
    },
    [dispatch]
  );

  const allProductsSelectionHandler = useCallback(
    (selectionState: boolean) => {
      dispatch(allSelectionHandler(selectionState));
    },
    [dispatch]
  );

  const removeSelectedProducts = useCallback(() => {
    dispatch(removeSelected());
  }, [dispatch]);

  return {
    init,
    reset,
    add,
    increase,
    decrease,
    selectionHandler,
    allProductsSelectionHandler,
    removeSelectedProducts,
  };
};
