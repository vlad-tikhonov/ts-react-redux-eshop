import { useAppSelector } from "store/hooks";
import { selectCatalogMenuState } from "store/modals/modals-selectors";

export const useCatalogMenuState = () => {
  return useAppSelector(selectCatalogMenuState);
};
