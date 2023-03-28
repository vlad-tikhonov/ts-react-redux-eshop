import { useAppDispatch } from "store/hooks";
import { login, logout } from "store/auth/auth-slice";
import { LoginPayload } from "types";

export const useAuthActions = () => {
  const dispatch = useAppDispatch();

  const signIn = (payload: LoginPayload) => {
    return dispatch(login(payload));
  };

  const signOut = () => {
    return dispatch(logout());
  };

  return {
    signIn,
    signOut,
  };
};
