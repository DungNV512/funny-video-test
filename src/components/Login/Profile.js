import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUser } from "../../selector/auth/selectAuth";
import { logout } from "../../actions";
import "./style.css";

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onShare = () => {
    history.push("/share");
  };

  const onLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div
      className="profile"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "460px",
      }}
    >
      <span>
        Welcome <b>{user.email}</b>
      </span>
      <button onClick={onShare}>Share a movie</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Profile;
