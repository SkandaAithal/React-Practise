import React, { useState } from "react";
import { useToggle } from "./customHooks/useToggle";

const Readcontent = ({ heading, details }) => {
  let { bool, toggle } = useToggle();
  return (
    <div>
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>{heading}</span>
      <button onClick={toggle}>{bool ? "hide" : "show"}</button>
      <p> {bool && details}</p>
    </div>
  );
};

export default Readcontent;
