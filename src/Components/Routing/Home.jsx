import React from "react";
import Image1 from "./Image1";
import { Link, Outlet } from "react-router-dom";
import Image2 from "./Image2";
import Image3 from "./Image3";
import Employee from "../Employee";
import Slider from "../Slider";
import Accordion from "../Accordion";
import { Arrayelement } from "../Arrayelement";
import Movies from "../useEffect/Movies";
const Home = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <Link to="img1">
            <Image1 />
          </Link>
          <Link to="img2">
            <Image2 />
          </Link>
          <Link to="img3">
            <Image3 />
          </Link>
        </div>

        <div style={{ width: "400px", height: "400px" }}>
          <Outlet style={{ width: "100%", height: "100%" }} />
        </div>

        <Employee />
      </div>
      <Accordion />
      <Arrayelement />
      <Movies />
      <Slider />
    </>
  );
};

export default Home;
