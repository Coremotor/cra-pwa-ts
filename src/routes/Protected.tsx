import { Navigate, useLocation } from "react-router-dom";
import React, { FC, ReactElement } from "react";
import { LocalStorageTokenKey } from "shared/api/localStorage";

interface Props {
  children: ReactElement<any, any> | null;
}
const Protected: FC<Props> = ({ children }) => {
  const token = localStorage.getItem(LocalStorageTokenKey);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default Protected;
