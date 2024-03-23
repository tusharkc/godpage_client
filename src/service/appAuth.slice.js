import { createSlice } from "@reduxjs/toolkit";
import { loginOrSignUpApi } from "./appAuth.service";

export const appAuthSlice = createSlice({
  name: "appAuth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    appToken: localStorage.getItem("appToken") || "",
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(
      loginOrSignUpApi.endpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        state.appToken = payload?.token;
        state.user = payload?.user;

        localStorage.setItem("appToken", payload.token);
        localStorage.setItem("user", JSON.stringify(payload.user));
      }
    );
  },
});

export const {} = appAuthSlice.actions;

export default appAuthSlice.reducer;
