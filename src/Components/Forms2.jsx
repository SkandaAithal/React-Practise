import React, { useState } from "react";

const Forms2 = () => {
  let [fdata, setfdata] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    mobile: "",
  });
  let [bool, setbool] = useState(false);
  let [farray, setFarray] = useState([]);
  //   form data
  function formdata({ target: { name, value } }) {
    setfdata({ ...fdata, [name]: value });
    console.log(fdata);
  }

  //   form data sumbit
  function submitdata(e) {
    e.preventDefault();
    setFarray([...farray, fdata]);
    setbool(true);
    setfdata({
      fname: "",
      lname: "",
      email: "",
      password: "",
      mobile: "",
    });
  }
  return (
    <div>
      <form action="" id="form2">
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          onChange={formdata}
          value={fdata.fname}
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          onChange={formdata}
          value={fdata.lname}
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Emails"
          onChange={formdata}
          value={fdata.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formdata}
          value={fdata.password}
        />
        <input
          type="number"
          name="mobile"
          placeholder="Mobile no"
          onChange={formdata}
          value={fdata.mobile}
        />
        <button type="submit" onClick={submitdata}>
          Submit
        </button>
      </form>

      {bool &&
        farray.map((fdata, id) => {
          return (
            <div key={id}>
              <h1>Firts name: {fdata.fname}</h1>
              <h1>Last name: {fdata.lname}</h1>
              <h1>Email:{fdata.email}</h1>
              <h1>Mobile:{fdata.mobile}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default Forms2;
