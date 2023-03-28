import { Navigate } from "react-router-dom";

interface ErrorDetecterProps {
  errors: string[];
  pathname: string;
  children: JSX.Element;
}

export const ErrorDetecter = ({
  errors,
  pathname,
  children,
}: ErrorDetecterProps) => {
  if (!errors.length) {
    return children;
  }

  return <Navigate to="/error" state={{ errors, pathname }} />;
};
