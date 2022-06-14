import React from "react";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

const Login = ({ state = {} }) => {
  const email = state && state.user && state.user.email;
  const isLoading = state.status === "pending";
  const isError = state.status === "rejected";

  if (email) {
    return <Profile />;
  }

  return (
    <>
      <LoginForm isLoading={isLoading} />
    </>
  );
};

export default Login;
