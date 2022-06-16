import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../actions/types";

const initialState = {
  isAuth: false,
  user: { email: "", password: "" },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      // auto login if register successful
      return {
        ...state,
        isAuth: true,
        user: payload.user,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: payload.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    default:
      return state;
  }
};
