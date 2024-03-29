import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  selectCategory,
  selectAllCategories,
} from "store/categories/categories-selectors";
import { useEffect } from "react";
import { loadCategories } from "store/categories/categories-slice";
import { Category } from "types";

export const useCategory = (
  slug: Pick<Category, "slug">["slug"] | undefined
): Category => {
  const dispatch = useAppDispatch();

  const categories = useAppSelector(selectAllCategories);
  const category = useAppSelector(selectCategory(slug));

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(loadCategories());
    }
  }, [categories, dispatch]);

  return category;
};
