import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectNoveltiesInfo, selectNoveltiesProducts} from "./novelties-selectors";
import { useEffect } from "react";
import { loadNoveltiesProducts } from "./novelties-slice";
import { ProductWithReviewsInfo } from "types";

export const useNovelties = (): [
  ProductWithReviewsInfo[],
  ReturnType<typeof selectNoveltiesInfo>
] => {
  const dispatch = useAppDispatch();

  const { isLoading, errors } = useAppSelector(selectNoveltiesInfo);
  const novelties = useAppSelector(selectNoveltiesProducts);

  useEffect(() => {
    if (novelties.length === 0) {
      dispatch(loadNoveltiesProducts());
    }
  }, [novelties, dispatch]);

  return [novelties, { isLoading, errors }];
};
