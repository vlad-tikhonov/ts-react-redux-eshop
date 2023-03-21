import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  selectCategoriesInfo,
  selectAllCategories,
} from "./categories-selectors";
import { useEffect } from "react";
import { loadCategories } from "./categories-slice";
import { Category } from "types";

export const useCategories = (): [
  Category[],
  ReturnType<typeof selectCategoriesInfo>
] => {
  const dispatch = useAppDispatch();

  const { isLoading, errors } = useAppSelector(selectCategoriesInfo);
  const categories = useAppSelector(selectAllCategories);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(loadCategories());
    }
  }, [categories, dispatch]);

  return [categories, { isLoading, errors }];
};
