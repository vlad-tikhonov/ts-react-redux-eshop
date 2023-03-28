import { useAppSelector } from "store/hooks";
import { selectFavoritesLength } from "store/favorites/favorites-selectors";

export const useFavoritesCount = () => {
  return useAppSelector(selectFavoritesLength);
};
