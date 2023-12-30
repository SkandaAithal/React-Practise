import React, { useState } from "react";

function useForms() {
  let [fdata, setfdata] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    mobile: "",
  });

  let [data, setdata] = useState("");

  //   form data
  function formdata({ target: { name, value } }) {
    setfdata({ ...fdata, [name]: value });
    console.log(fdata);
  }

  //   form data sumbit
  function submitdata(e) {
    e.preventDefault();
    setdata(fdata);
  }

  return { formdata, data, submitdata };
}

export { useForms };
