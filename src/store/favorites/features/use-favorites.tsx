import { useAppSelector } from "store/hooks";
import { selectFavorites } from "store/favorites/favorites-selectors";

export const useFavorites = () => {
  return useAppSelector(selectFavorites);
};
