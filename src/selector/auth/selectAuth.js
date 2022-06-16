import { createSelector } from "reselect";

const authSelector = (state) => state.authReducer;

export const selectUser = createSelector(authSelector, (state) => state.user);
export const selectIsAuth = createSelector(
  authSelector,
  (state) => state.isAuth
);
