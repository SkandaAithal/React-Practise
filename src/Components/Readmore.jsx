import React from "react";
import info from "../data/readmoredetails";
import Readcontent from "./Readcontent";
const Readmore = () => {
  return (
    <div>
      {info.map(({ id, heading, details }) => {
        return (
          <div key={id}>
            <Readcontent heading={heading} details={details} />
          </div>
        );
      })}
    </div>
  );
};

export default Readmore;
