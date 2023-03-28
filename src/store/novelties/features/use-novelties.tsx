import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectNoveltiesInfo, selectNoveltiesProducts} from "store/novelties/novelties-selectors";
import { loadNoveltiesProducts } from "store/novelties/novelties-slice";
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
