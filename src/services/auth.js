import axios from "axios";
import { ENDPOINT_URL } from "../constants";
import { generateUniqueId } from "../helper";
import { checkAuth, register as actionRegister } from "../actions";

const login = (email, password, dispatch) => {
  // mimic checkAuth function, should be execute on back-end side
  return checkAuth({ email, password }).then((response) => {
    const { user, message, statusCode } = response;
    switch (statusCode) {
      case 200:
        localStorage.setItem("user", JSON.stringify(user));
        return Promise.resolve({
          user,
          isAuth: true,
          message,
        });
      case 201:
        return dispatch(actionRegister({ email, password })).then((rs) => {
          return Promise.resolve({
            user: rs,
            isAuth: true,
            message,
          });
        });
      case 400:
      case 401:
        return Promise.reject({
          isAuth: false,
          message,
        });
      default:
        break;
    }
  });
};

const register = ({ email, password }) => {
  return axios.post(ENDPOINT_URL + "user", {
    id: generateUniqueId().smallId,
    access_token: generateUniqueId().uniqueId,
    email,
    password,
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
  register,
};
