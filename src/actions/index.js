import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  GET_LIST_VIDEOS_SUCCESS,
  GET_LIST_VIDEOS_FAILURE,
} from "./types";

import AuthService from "../services/auth";
import videoService from "../services/videos";
import userService from "../services/user";
import { getTokenFromLocal } from "../helper";

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

export const login =
  ({ email, password }) =>
  (dispatch) => {
    return AuthService.login(email, password).then(
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

export const checkAuth = ({ email, password }, user) => {
  return userService.getPublicContent().then(
    (res) => {
      if (email === res.data.email && password === res.data.password) {
        return Promise.resolve({
          code: 200,
          message: "Login successfully!",
          isAuth: true,
          user: { ...user.data, access_token: "1234" }, // should have access_token_expires_at and refresh_token
        });
      }
      return Promise.resolve({
        code: 401,
        isAuth: false,
        message: "Login failure!",
      });
    },
    (error) => {
      console.log(error);
      return false;
    }
  );
};
