import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  selectProducts,
  selectProductsInfo,
} from "features/products/products-selectors";
import { loadProducts } from "features/products/products-slice";
import { ProductWithReviewsAvg } from "types";

export const useProducts = (
  categorySlug: string | undefined
): [ProductWithReviewsAvg[], ReturnType<typeof selectProductsInfo>] => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(selectProductsInfo);
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    if (categorySlug) {
      dispatch(loadProducts({ slug: categorySlug }));
    }
  }, [categorySlug, dispatch]);

  return [products, { isLoading, error }];
};
