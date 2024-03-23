import { configureStore } from "@reduxjs/toolkit";
import appAuthReducer from "./service/appAuth.slice";
import { loginOrSignUpApi } from "./service/appAuth.service";

export default configureStore({
  reducer: {
    appAuth: appAuthReducer,
    [loginOrSignUpApi.reducerPath]: loginOrSignUpApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginOrSignUpApi.middleware),
});
