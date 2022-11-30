import { Navigate, useLocation } from "react-router-dom";
import React, { FC, ReactElement } from "react";

interface Props {
  children: ReactElement<any, any> | null;
}
const Protected: FC<Props> = ({ children }) => {
  const auth = true;
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default Protected;
