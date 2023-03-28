import { useAppDispatch } from "store/hooks";
import { loadSearchResults, resetSearch } from "store/search/search-slice";

export const useSearchActions = () => {
  const dispatch = useAppDispatch();

  const load = (payload: string) => {
    return dispatch(loadSearchResults(payload));
  };

  const reset = () => {
    return dispatch(resetSearch());
  };

  return {
    load,
    reset,
  };
};
