import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  selectProducts,
  selectProductsInfo,
} from "features/products/products-selectors";
import { loadProducts } from "features/products/products-slice";
import { Product } from "types";
import { RootState } from "app/store";

export const useProducts = (
  categorySlug: string | undefined
): [Product[], ReturnType<typeof selectProductsInfo>] => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(selectProductsInfo);
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    if (categorySlug) {
      const filters = {
        category_slug: { exact: categorySlug },
        price: { gte: 0 },
        _price: { lte: 9999 },
      };

      dispatch(
        loadProducts({
          filters,
          perPage: "6",
          page: "1",
        })
      );
    }
  }, [categorySlug, dispatch]);

  return [products, { isLoading, error }];
};
