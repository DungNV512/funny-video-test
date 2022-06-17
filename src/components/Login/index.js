import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../selector/auth/selectAuth";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

import './style.css'

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  return <> {isAuth ? <Profile /> : <LoginForm />}</>;
};

export default Login;
