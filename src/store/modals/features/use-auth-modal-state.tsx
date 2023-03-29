import { useAppSelector } from "store/hooks";
import { selectAuthModalState } from "store/modals/modals-selectors";

export const useAuthModalState = () => {
  return useAppSelector(selectAuthModalState);
};
