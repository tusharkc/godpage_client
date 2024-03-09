import React from "react";
import { Route, Routes } from "react-router-dom";
import { appInternalRoutes } from "./constants/appInternalRoutes";
import { LoginOrSignup } from "./features";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={appInternalRoutes.APP_LOG_IN} element={<LoginOrSignup />} />
      <Route
        path={appInternalRoutes.APP_SIGN_UP}
        element={<LoginOrSignup isSignupWorkFlow />}
      />
    </Routes>
  );
};

export default AppRoutes;
