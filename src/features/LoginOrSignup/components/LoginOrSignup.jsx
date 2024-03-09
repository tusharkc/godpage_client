import React from "react";

const LoginOrSignup = ({ isSignupWorkFlow }) => {
  return (
    <div>
      <div className="h-screen flex text-center">
        <div className="w-8/12 h-full bg-slate-200">Gradiant</div>
        <div className="w-4/12 flex items-center justify-center">
          {isSignupWorkFlow ? <SignUpWorkflow /> : <LoginWorkflow />}
        </div>
      </div>
    </div>
  );
};

const LoginWorkflow = () => {
  return <div>LoginWorkflow</div>;
};

const SignUpWorkflow = () => {
  return <div>SignUpWorkflow</div>;
};

export default LoginOrSignup;
