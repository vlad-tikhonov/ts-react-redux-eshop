import { useCallback } from "react";
import { useAppDispatch } from "store/hooks";
import { loadSearchResults, resetSearch } from "store/search/search-slice";

export const useSearchActions = () => {
  const dispatch = useAppDispatch();

  const load = useCallback(
    (payload: string) => {
      return dispatch(loadSearchResults(payload));
    },
    [dispatch]
  );

  const reset = useCallback(() => {
    return dispatch(resetSearch());
  }, [dispatch]);

  return {
    load,
    reset,
  };
};
