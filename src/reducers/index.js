import { combineReducers } from "redux";
import authReducer from "./auth";
import videoReducer from "./videos";

export default combineReducers({
  authReducer,
  videoReducer,
});
