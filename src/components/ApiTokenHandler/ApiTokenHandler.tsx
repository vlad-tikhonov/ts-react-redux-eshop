import { useEffect } from "react";
import { setToken } from "api";
import { useToken } from "store/auth/features";

export const ApiTokenHandler = () => {
  const token = useToken();

  useEffect(() => {
    setToken(token);
  }, [token]);

  return null;
};
