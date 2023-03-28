import { useAppSelector } from "store/hooks";
import { selectToken } from "store/auth/auth-selectors";

export const useToken = () => {
  return useAppSelector(selectToken);
};
