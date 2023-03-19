import { useAppSelector } from "app/hooks";
import { selectRegisterInfo, selectUser } from "./register-selectors";

export const useRegister = (): [
  ReturnType<typeof selectUser>,
  ReturnType<typeof selectRegisterInfo>
] => {
  const { isLoading, errors } = useAppSelector(selectRegisterInfo);
  const user = useAppSelector(selectUser);

  return [user, { isLoading, errors }];
};
