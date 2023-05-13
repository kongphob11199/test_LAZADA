import React, { useState } from "react";

// css
import "./Home.css";

// pages
import Nav from "../../layout/nav/Nav";
import Menu from "../../layout/menu/Menu";
import Body from "../body/Body";
import LayoutScroll from "../../layout/layoutScroll/LayoutScroll";

const Home = () => {
  let [scroll, setScroll] = useState("hidden");

  const handle = (data) => {
    setScroll((scroll = data === "absolute" ? "hidden" : "visible"));
  };
  return (
    <>
      <Nav onScroll={handle} />
      <Menu />
      <Body />
      <LayoutScroll visible={scroll} />
    </>
  );
};

export default Home;
