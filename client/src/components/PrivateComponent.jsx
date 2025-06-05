import React from "react";
import useAuthStatus from "../hooks/useAuthStatus";
import Loader from "./Loader";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  const { checkUserLoading, userExist } = useAuthStatus();

  if (checkUserLoading) {
    return <Loader />;
  }

  return userExist ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateComponent;
