import axios from "axios";
import { API_URL } from "../constants";
import { checkAuth } from "../actions";

const login = (email, password) => {
  return axios
    .post(API_URL + "user", {
      email,
      password,
    })
    .then((user) => checkAuth({ email, password }, user)) // mimic checkAuth function, should be execute on back-end side
    .then((response) => {
      const { isAuth, user, message } = response;
      if (isAuth) {
        localStorage.setItem("user", JSON.stringify(user));
        return Promise.resolve({
          user,
          isAuth,
          message,
        });
      } else {
        return Promise.reject({
          isAuth,
          message,
        });
      }
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
};
