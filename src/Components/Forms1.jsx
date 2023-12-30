import React from "react";
import { useForms } from "./customHooks/useForms";

const Forms1 = () => {
  let { formdata, data, submitdata } = useForms();
  return (
    <div>
      <form action="" id="form1">
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          onChange={formdata}
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          onChange={formdata}
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email"
          onChange={formdata}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formdata}
        />
        <input
          type="number"
          name="mobile"
          placeholder="Mobile no"
          onChange={formdata}
        />
        <button type="submit" onClick={submitdata}>
          Submit
        </button>
      </form>

      {data && (
        <div>
          <h1>Firts name: {data.fname}</h1>
          <h1>Last name: {data.lname}</h1>
          <h1>Email:{data.email}</h1>
          <h1>Mobile:{data.mobile}</h1>
        </div>
      )}
    </div>
  );
};

export default Forms1;
