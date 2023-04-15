import { useAppDispatch } from "store/hooks";
import {
  registerUser,
  resetErrors,
  resetState,
} from "store/register/register-slice";
import { RegisterPayload } from "types";
import { useCallback } from "react";

export const useRegisterActions = () => {
  const dispatch = useAppDispatch();

  const register = useCallback(
    (payload: RegisterPayload) => {
      return dispatch(registerUser(payload));
    },
    [dispatch]
  );

  const resetRegisterErrors = useCallback(() => {
    dispatch(resetErrors());
  }, [dispatch]);

  const resetRegisterState = useCallback(() => {
    dispatch(resetState());
  }, [dispatch]);

  return {
    register,
    resetRegisterState,
    resetRegisterErrors,
  };
};
