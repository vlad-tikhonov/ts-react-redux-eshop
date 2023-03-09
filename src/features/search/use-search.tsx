import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  selectSearchInfo,
  selectSearchResults,
} from "features/search/search-selectors";
import { loadSearchResults } from "features/search/search-slice";
import { SearchResults } from "types";

export const useSearch = (
  query: string
): [SearchResults | null, ReturnType<typeof selectSearchInfo>] => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(selectSearchInfo);
  const results = useAppSelector(selectSearchResults);

  useEffect(() => {
    if (query) {
      dispatch(loadSearchResults(query));
    }
  }, [query, dispatch]);

  return [results, { isLoading, error }];
};
