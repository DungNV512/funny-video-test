import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isAuthed: false,
  user:{email:'user@gmail.com', pass:'test'}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
