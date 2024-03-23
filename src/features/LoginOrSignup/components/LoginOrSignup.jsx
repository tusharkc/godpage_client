import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { appInternalRoutes } from "../../../constants/appInternalRoutes";
import {
  useLoginMutation,
  useSignUpMutation,
} from "../../../service/appAuth.service";

const LoginOrSignup = ({ isSignupWorkFlow }) => {
  return (
    <div>
      <div className="h-screen flex">
        <div className="w-8/12 h-full bg-[#F0F0F0] border-r flex items-center justify-start p-8">
          <h1 className="font-poppins font-extralight text-[3.5rem]">
            Welcome to
            <span className="font-extrabold">
              <br />
              God Page
            </span>
            .
          </h1>
        </div>
        <div className="flex items-center justify-center w-4/12 p-4">
          {isSignupWorkFlow ? <SignUpWorkflow /> : <LoginWorkflow />}
        </div>
      </div>
    </div>
  );
};

const LoginWorkflow = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password is too short - should be 8 chars minimum.")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      await login(values)
        .then(() => {
          navigate(appInternalRoutes.PROMPT);
        })
        .catch((error) => {
          console.log("error at login method", error);
        });
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col space-y-8 w-full"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
        <button
          type="submit"
          className="hover:bg-black text-black border border-black hover:text-white bg-transparent font-bold py-2 px-4 rounded"
        >
          Login
        </button>

        <button
          onClick={() => {
            navigate(appInternalRoutes.APP_SIGN_UP);
          }}
          type="submit"
          className="hover:bg-black text-black border border-black hover:text-white bg-transparent font-bold py-2 px-4 rounded"
        >
          Sign up
        </button>
      </form>
    </>
  );
};

const SignUpWorkflow = () => {
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password is too short - should be 8 chars minimum.")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      await signUp(values)
        .then(() => {
          navigate(appInternalRoutes.PROMPT);
        })
        .catch((error) => {
          console.log("error at sign up method", error);
        });
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col space-y-8 w-full"
      >
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {formik.errors.fullName && formik.touched.fullName && (
            <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
        <button
          type="submit"
          className="hover:bg-black text-black border border-black hover:text-white bg-transparent font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>

        <button
          onClick={() => {
            navigate(appInternalRoutes.APP_LOG_IN);
          }}
          type="submit"
          className="hover:bg-black text-black border border-black hover:text-white bg-transparent font-bold py-2 px-4 rounded"
        >
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginOrSignup;
