import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  GET_LIST_VIDEOS,
  GET_LIST_VIDEOS_SUCCESS,
  GET_LIST_VIDEOS_FAILURE,
} from "./types";

import AuthService from "../services/auth";
import videoService from "../services/videos";

export const getVideos = () => (dispatch) => {
  return;
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAILURE,
        payload: message,
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
  console.log("test");
  return videoService.getPublicContent().then(
    (res) => {
      console.log("getListVideos", res);
      const { data } = res;
      dispatch({
        type: GET_LIST_VIDEOS_SUCCESS,
        payload: { videos: data },
      });
    },
    (error) => {
      console.log("test", error);
      dispatch({
        type: GET_LIST_VIDEOS_FAILURE,
      });

      return Promise.reject();
    }
  );
};
