import { useAppDispatch } from "store/hooks";
import { useCallback } from "react";
import { login, logout } from "store/auth/auth-slice";
import { LoginPayload } from "types";

export const useAuthActions = () => {
  const dispatch = useAppDispatch();

  const signIn = useCallback(
    (payload: LoginPayload) => {
      return dispatch(login(payload));
    },
    [dispatch]
  );

  const signOut = useCallback(() => {
    return dispatch(logout());
  }, [dispatch]);

  return {
    signIn,
    signOut,
  };
};
