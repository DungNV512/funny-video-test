import React from "react";
import Videos from "../../components/Videos";

const Home = () => {
  return (
    <div
      className="home-page"
      style={{
        margin: "0 auto",
        maxWidth: "720px",
      }}
    >
      <Videos />
    </div>
  );
};

export default Home;
