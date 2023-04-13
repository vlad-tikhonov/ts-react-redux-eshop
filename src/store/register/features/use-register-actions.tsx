import { useAppDispatch } from "store/hooks";
import { registerUser } from "store/register/register-slice";
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

  return {
    register,
  };
};
