import React from "react";
import { useHistory } from "react-router-dom";
import Login from "../Login";
import IconHome from "../../assets/home-svgrepo-com.svg";

const Header = () => {
  const history = useHistory();
  const handleOnclick = () => {
    history.push("/");
  };
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
      <img
        src={IconHome}
        alt="logo"
        height={48}
        width={48}
        style={{ margin: "0 2em", cursor: "pointer" }}
        onClick={handleOnclick}
      />
      <Login />
    </div>
  );
};

export default Header;
