import React, { useState } from "react";
import formVlaidatestyle from "../css/formvalidate.module.css";
import axios from "axios";
const ValidateWhileTyping = () => {
  let [fdata, setfdata] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
  });
  let [errors, setErrors] = useState({});
  let url = "http://localhost:3500/login";
  function validation(name, value) {
    if (name === "username") {
      if (!value) {
        return { username: "Name is empty" };
      } else if (!/^[A-Za-z\s]+$/g.test(value)) {
        return { username: "Name should contain only alphabets" };
      } else {
        return { username: "" };
      }
    } else if (name === "email") {
      if (!value) {
        return { email: "email is empty" };
      } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        return { email: "email is not in right format" };
      } else {
        return { email: "" };
      }
    } else if (name === "password") {
      if (!value) {
        return { password: "password is empty" };
      } else if (value.length < 8) {
        return { password: "password should more than 8 characters" };
      } else if (!/^[A-Za-z0-9\@!#$%&*^?]+$/.test(value)) {
        return { password: "password is not in right format" };
      } else {
        return { password: "" };
      }
    } else if (name === "mobile") {
      if (!value) {
        return { mobile: "Mobile is empty" };
      } else if (!/^[6-9][0-9]{9}$/.test(value)) {
        return { mobile: "mobile should contain only 10 numbers" };
      } else {
        return { mobile: "" };
      }
    }
  }
  function getValue({ target: { name, value } }) {
    setfdata({ ...fdata, [name]: value });
    let returnedErrorObject = validation(name, value);
    setErrors({ ...errors, ...returnedErrorObject });
    console.log(errors);
  }

  async function submitData(e) {
    try {
      e.preventDefault();
      if (
        Object.values(errors).every((emsg) => emsg === "") &&
        Object.values(fdata).every((data) => data !== "")
      ) {
        console.log("form succesfully submitted");
        let { data } = await axios.post(url, fdata);
        console.log(data);

        let token = `Bearer ${data.token}`;

        console.log(token.split(" "));
        localStorage.setItem("my-token", token);
        // setfdata({
        //   username: "",
        //   email: "",
        //   mobile: "",
        // });
      } else {
        for (const key in fdata) {
          if (fdata[key] === "") {
            setErrors((prev) => {
              return { ...prev, [key]: `${key} is empty` };
            });
          }
        }
        console.log(errors);
        console.log("form not submitted");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  }
  return (
    <div>
      <form onSubmit={submitData} className={formVlaidatestyle.validation}>
        <div>
          <input
            type="text"
            placeholder="name"
            name="username"
            onChange={getValue}
            value={fdata.username}
          />
          {errors.username && <h6>{errors.username}</h6>}
        </div>
        <br />
        <div>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={getValue}
            value={fdata.email}
          />
          {errors.email && <h6>{errors.email}</h6>}
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={getValue}
            value={fdata.password}
          />
          {errors.password && <h6>{errors.password}</h6>}
        </div>
        <br />
        <div>
          <input
            type="tel"
            placeholder="mobile"
            name="mobile"
            onChange={getValue}
            value={fdata.mobile}
          />
          {errors.mobile && <h6>{errors.mobile}</h6>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ValidateWhileTyping;
