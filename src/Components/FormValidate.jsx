import React, { useState } from "react";
import formVlaidatestyle from "../css/formvalidate.module.css";
import validation from "./validation";
const FormValidate = () => {
  let [formData, setFormData] = useState({
    fn: "",
    mobile: "",
    email: "",
    pwd: "",
  });
  let [error, setError] = useState({});

  let updatevalue = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  let submitFunction = (e) => {
    e.preventDefault();
    setError(validation(formData));

    if (Object.keys(validation(formData)).length === 0) {
      setFormData({
        fn: "",
        mobile: "",
        email: "",
        pwd: "",
      });
    }
  };

  return (
    <div>
      <form onSubmit={submitFunction} className={formVlaidatestyle.validation}>
        <div>
          <input
            type="text"
            name="fn"
            value={formData.fn}
            placeholder="First name"
            onChange={updatevalue}
          />
          <h6>{error.fnMessage && error.fnMessage}</h6>
        </div>
        <div>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            placeholder="Mobile no"
            onChange={updatevalue}
          />
          <h6>{error.mobileMessage && error.mobileMessage}</h6>
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="email"
            onChange={updatevalue}
          />
          <h6>{error.emailMessage && error.emailMessage}</h6>
        </div>
        <div>
          <input
            type="text"
            name="pwd"
            value={formData.pwd}
            placeholder="password"
            onChange={updatevalue}
          />
          <h6>{error.passwordMessage && error.passwordMessage}</h6>
        </div>
        <button type="submit">done</button>
      </form>
    </div>
  );
};

export default FormValidate;
