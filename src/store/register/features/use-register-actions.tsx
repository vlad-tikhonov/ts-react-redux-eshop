import { useAppDispatch } from "store/hooks";
import { registerUser } from "store/register/register-slice";
import { RegisterPayload } from "types";

export const useRegisterActions = () => {
  const dispatch = useAppDispatch();

  const register = (payload: RegisterPayload) => {
    return dispatch(registerUser(payload));
  };

  return {
    register,
  };
};
