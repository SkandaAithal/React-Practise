import axios from "axios";
import { useState } from "react";

export default function Buttons() {
  async function change() {
    let token = localStorage.getItem("my-token");

    let { data } = await axios.get("http://localhost:3500/register", {
      headers: {
        Authorization: token,
      },
    });
    console.log(data);
  }
  return (
    <>
      <button onClick={change}>click to send token</button>
    </>
  );
}
