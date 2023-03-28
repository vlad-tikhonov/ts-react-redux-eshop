import { useAppSelector } from "store/hooks";
import { selectUserId } from "store/auth/auth-selectors";

export const useUserId = (): ReturnType<typeof selectUserId> => {
  return useAppSelector(selectUserId);
};
