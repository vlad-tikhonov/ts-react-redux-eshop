import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  selectProduct,
  selectProductInfo,
} from "features/product/product-selectors";
import { loadProduct } from "features/product/product-slice";
import { ProductWithReviewsInfoAndRelated } from "types";

export const useProduct = (
  slug: string | undefined
): [
  ProductWithReviewsInfoAndRelated | null,
  ReturnType<typeof selectProductInfo>
] => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(selectProductInfo);
  const product = useAppSelector(selectProduct);

  useEffect(() => {
    if (slug) {
      dispatch(loadProduct(slug));
    }
  }, [slug, dispatch]);

  return [product, { isLoading, error }];
};
