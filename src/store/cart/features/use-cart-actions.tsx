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
import { Product, CartProduct } from "types";

export const useCartActions = () => {
  const dispatch = useAppDispatch();

  const init = () => {
    dispatch(initCart());
  };

  const reset = () => {
    dispatch(resetCart());
  };

  const add = (product: Product) => {
    dispatch(addToCart(product));
  };

  const increase = (productId: CartProduct["id"]) => {
    dispatch(increaseProductCount(productId));
  };

  const decrease = (productId: Product["_id"]) => {
    dispatch(decreaseProductCount(productId));
  };

  const selectionHandler = (payload: {
    id: CartProduct["id"];
    selectionState: boolean;
  }) => {
    dispatch(productSelectionHandler(payload));
  };

  const allProductsSelectionHandler = (selectionState: boolean) => {
    dispatch(allSelectionHandler(selectionState));
  };

  const removeSelectedProducts = () => {
    dispatch(removeSelected());
  };

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
