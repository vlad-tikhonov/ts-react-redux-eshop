import { useAppDispatch } from "store/hooks";
import {
  toggleAuthModal,
  closeAuthModal,
  toggleCatalogDropdown,
  closeCatalogDropdown,
} from "store/modals/modals-slice";
import { useCallback } from "react";

export const useModalsActions = () => {
  const dispatch = useAppDispatch();

  const toggleAuth = useCallback(() => {
    dispatch(toggleAuthModal());
  }, [dispatch]);

  const closeAuth = useCallback(() => {
    dispatch(closeAuthModal());
  }, [dispatch]);

  const toggleCatalogMenu = useCallback(() => {
    dispatch(toggleCatalogDropdown());
  }, [dispatch]);

  const closeCatalogMenu = useCallback(() => {
    dispatch(closeCatalogDropdown());
  }, [dispatch]);

  return {
    toggleAuth,
    closeAuth,
    toggleCatalogMenu,
    closeCatalogMenu,
  };
};
