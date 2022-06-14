import React from "react";

const Profile = ({ state = {}, onLogout, onShare }) => {
  const email = state && state.user && state.user.email;
  const isLoading = state.status === "pending";
  const isError = state.status === "rejected";

  return (
    <div>
      <span>
        Welcome <b>{state.user.email}</b>
      </span>
      <button onClick={onShare}>Share a movie</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Profile;
