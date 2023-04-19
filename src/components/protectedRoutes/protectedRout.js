import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRout = ({ loginData }) => {
  {
    console.log(loginData, "hi uam protected");
  }
  return <>{loginData ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

/**----------------------- */

export const NonProtectedRout = ({ loginData }) => {
  {
    console.log(
      loginData,
      "hi am protected alreadylogin so don;t open login again"
    );
  }
  return <>{loginData ? <Navigate to={"/home"} /> : <Outlet />}</>;
};
export default ProtectedRout;
