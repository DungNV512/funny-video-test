import React from "react";
import Login from "../Login";
import { ReactComponent as IconHome } from "../../assets/home-svgrepo-com.svg";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px",
        paddingBottom: "10px",
        borderBottom: "1px double",
      }}
    >
      <IconHome style={{ height: "48px", margin: "0 2em" }} />
      <Login />
    </div>
  );
};

export default Header;
