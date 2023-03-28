import { useAppSelector } from "store/hooks";
import { selectSearchResults } from "store/search/search-selectors";

export const useSearchResults = (pathname: string) => {
  return useAppSelector(selectSearchResults(pathname));
};
