import React from "react";
import Login from "../Login";
import { ReactComponent as IconHome } from "../../assets/home-svgrepo-com.svg";
const Header = ({ state = {} }) => {
  const email = state && state.user && state.user.email;
  const isLoading = state.status === "pending";
  const isError = state.status === "rejected";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <IconHome style={{ height: "48px", margin: "0 2em" }} />
      <Login isLoading={isLoading} />
    </div>
  );
};

export default Header;
