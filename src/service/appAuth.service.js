import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { appApiRoutes } from "../constants/appApiRoutes";

export const loginOrSignUpApi = createApi({
  reducerPath: "loginOrSignUpApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_BASE_URL }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userDetails) => ({
        url: appApiRoutes.USER_SIGNUP_ROUTE,
        method: "POST",
        body: userDetails,
      }),
    }),

    login: builder.mutation({
      query: (userDetails) => ({
        url: appApiRoutes.USER_LOGIN_ROUTE,
        method: "POST",
        body: userDetails,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = loginOrSignUpApi;
