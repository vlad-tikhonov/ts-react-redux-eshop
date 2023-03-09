import { useAppSelector } from "app/hooks";
import { selectAuthInfo } from "./auth-selectors";

export const useAuth = (): ReturnType<typeof selectAuthInfo> => {
  const { user, isLoading, error } = useAppSelector(selectAuthInfo);

  return { user, isLoading, error };
};
