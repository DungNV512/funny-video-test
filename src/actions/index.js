// import { Promise, resolve } from "bluebird";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  GET_LIST_VIDEOS_SUCCESS,
  GET_LIST_VIDEOS_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./types";

import AuthService from "../services/auth";
import videoService from "../services/videos";
import userService from "../services/user";
import { getTokenFromLocal, checkStatusCode } from "../helper";

export const silentLogin = () => (dispatch) => {
  const userInfo = getTokenFromLocal();
  if (!userInfo) {
    return;
  }
  const { access_token: token, email, password } = userInfo;
  if (token) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: { email: email, password: password },
        message: "silent login successful",
      },
    });
  }
};

export const register =
  ({ email, password }) =>
  (dispatch) => {
    return AuthService.register({ email, password }).then(
      (res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        const user = {
          id: res.data.id,
          email: res.data.email,
          password: res.data.password,
          access_token: res.data.access_token,
        };
        dispatch({
          type: REGISTER_SUCCESS,
          payload: {
            user,
            message: res.statusText,
          },
        });

        return Promise.resolve(user);
      },
      (error) => {
        dispatch({
          type: REGISTER_FAILURE,
          payload: { message: error.message },
        });

        return Promise.reject();
      }
    );
  };

export const login =
  ({ email, password }) =>
  (dispatch) => {
    return AuthService.login(email, password, dispatch).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data.user, message: data.message },
        });

        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: { message: error.message },
        });

        return Promise.reject();
      }
    );
  };

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};

export const getListVideos = () => (dispatch) => {
  return videoService.getPublicContent().then(
    (res) => {
      const { data } = res;
      dispatch({
        type: GET_LIST_VIDEOS_SUCCESS,
        payload: { videos: data },
      });
    },
    (error) => {
      dispatch({
        type: GET_LIST_VIDEOS_FAILURE,
      });

      return Promise.reject();
    }
  );
};

export const checkAuth = (currentUser) => {
  return userService.getUsers().then(
    (res) => {
      const status = checkStatusCode(currentUser, res.data);
      return status;
    },
    (error) => {
      console.log(error);
      return false();
    }
  );
};
