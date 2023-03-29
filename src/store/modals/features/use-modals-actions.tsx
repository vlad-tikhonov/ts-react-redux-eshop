import { useAppDispatch } from "store/hooks";
import {
  toggleAuthModal,
  closeAuthModal,
  toggleCatalogDropdown,
  closeCatalogDropdown,
} from "store/modals/modals-slice";

export const useModalsActions = () => {
  const dispatch = useAppDispatch();

  const toggleAuth = () => {
    dispatch(toggleAuthModal());
  };

  const closeAuth = () => {
    dispatch(closeAuthModal());
  };

  const toggleCatalogMenu = () => {
    dispatch(toggleCatalogDropdown());
  };

  const closeCatalogMenu = () => {
    dispatch(closeCatalogDropdown());
  };

  return {
    toggleAuth,
    closeAuth,
    toggleCatalogMenu,
    closeCatalogMenu,
  };
};
