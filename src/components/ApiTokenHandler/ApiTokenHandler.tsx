import { useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { selectToken } from "store/auth/auth-selectors";
import { setToken } from "api";

export const ApiTokenHandler = () => {
  const token = useAppSelector(selectToken);

  useEffect(() => {
    setToken(token);
  }, [token]);

  return null;
};
