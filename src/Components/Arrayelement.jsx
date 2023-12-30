import React, { useState } from "react";
import data from "../data/data";
export const Arrayelement = () => {
  let [arr, setarr] = useState([]);
  let [ogArr, setogArr] = useState(data);

  let add = () => {
    setarr([...arr, ogArr[arr.length]]);
    setogArr(data);
  };
  return (
    <div>
      {arr.map((ele) => (
        <h1> {ele} </h1>
      ))}

      <button onClick={add}>add</button>
    </div>
  );
};
