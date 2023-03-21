import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectProducts, selectProductsInfo } from "./products-selectors";
import { loadProducts } from "./products-slice";
import { ProductWithReviewsInfo } from "types";

export const useProducts = (
  categorySlug: string | undefined
): [ProductWithReviewsInfo[], ReturnType<typeof selectProductsInfo>] => {
  const dispatch = useAppDispatch();
  const { isLoading, errors } = useAppSelector(selectProductsInfo);
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    if (categorySlug) {
      dispatch(loadProducts({ slug: categorySlug }));
    }
  }, [categorySlug, dispatch]);

  return [products, { isLoading, errors }];
};
