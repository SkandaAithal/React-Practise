import React, { createContext, useContext, useEffect, useState } from "react";
import cartstyles from "../css/cart.module.css";
// export let CountValue = createContext();
import { CountValue } from "./Cart";
const CartItems = ({
  title,
  price,
  image,
  id,
  getCartData,

  removeCart,
}) => {
  let [bool, setBool] = useState(true);

  console.log("child");
  return (
    <div className={cartstyles.cartitem}>
      <img src={image} alt="" />
      <h4>{title}</h4>
      <h3>Price: {price}$</h3>
      {bool ? (
        <button
          onClick={(event) => {
            setBool(!bool);
            getCartData();
          }}
        >
          ADD
        </button>
      ) : (
        <button
          onClick={(event) => {
            setBool(!bool);
            removeCart();
          }}
        >
          REMOVE
        </button>
      )}
    </div>
  );
};

export default React.memo(CartItems);
