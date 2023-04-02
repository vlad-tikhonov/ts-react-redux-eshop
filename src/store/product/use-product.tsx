/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectProduct, selectProductInfo } from "./product-selectors";
import { loadProduct } from "./product-slice";
import { ProductWithReviewsInfoAndRelated } from "types";

export const useProduct = (
  slug: string | undefined
): [
  ProductWithReviewsInfoAndRelated | null,
  ReturnType<typeof selectProductInfo>
] => {
  const dispatch = useAppDispatch();
  const { isLoading, errors } = useAppSelector(selectProductInfo);
  const product = useAppSelector(selectProduct);

  useEffect(() => {
    if (!slug) {
      return;
    }

    dispatch(loadProduct(slug));
  }, [slug]);

  return [product, { isLoading, errors }];
};
