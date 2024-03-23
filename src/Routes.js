import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { appInternalRoutes } from "./constants/appInternalRoutes";
import { LoginOrSignup, PromptFeature } from "./features";
import { useSelector } from "react-redux";
import { nonProtectedRoutes } from "./constants/nonProtectedRoutes";

const AppRoutes = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.appAuth.user);

  console.log("currentUser", currentUser);

  useEffect(() => {
    if (!nonProtectedRoutes.includes(pathname) && !currentUser) {
      navigate(appInternalRoutes.APP_LOG_IN);
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path={appInternalRoutes.APP_LOG_IN} element={<LoginOrSignup />} />
      <Route
        path={appInternalRoutes.APP_SIGN_UP}
        element={<LoginOrSignup isSignupWorkFlow />}
      />
      <Route path={appInternalRoutes.PROMPT} element={<PromptFeature />} />
    </Routes>
  );
};

export default AppRoutes;
