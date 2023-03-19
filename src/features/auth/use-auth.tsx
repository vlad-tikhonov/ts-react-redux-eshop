import { useAppSelector } from "app/hooks";
import { selectAuthInfo, selectUser } from "./auth-selectors";

export const useAuth = (): [
  ReturnType<typeof selectUser>,
  ReturnType<typeof selectAuthInfo>
] => {
  const { isLoading, errors } = useAppSelector(selectAuthInfo);
  const user = useAppSelector(selectUser);

  return [user, { isLoading, errors }];
};
