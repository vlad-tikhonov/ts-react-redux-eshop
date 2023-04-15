import { useAppDispatch } from "store/hooks";
import { useCallback } from "react";
import { login, logout, resetErrors } from "store/auth/auth-slice";
import { LoginPayload } from "types";

export const useAuthActions = () => {
  const dispatch = useAppDispatch();

  const signIn = useCallback(
    (payload: LoginPayload) => {
      dispatch(login(payload));
    },
    [dispatch]
  );

  const signOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const resetAuthErrors = useCallback(() => {
    dispatch(resetErrors());
  }, [dispatch]);

  return {
    signIn,
    signOut,
    resetAuthErrors,
  };
};
