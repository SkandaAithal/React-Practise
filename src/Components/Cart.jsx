import React, { createContext, useCallback, useRef, useState } from "react";
import cartData from "../data/cartData";
import CartItems from "./CartItems";
import cartstyles from "../css/cart.module.css";

export let CountValue = createContext();
const Cart = () => {
  let [count, setCount] = useState(0);

  let getCartData = useCallback(() => {
    setCount((pc) => {
      return pc + 1;
    });

    console.log("callback add");
  }, []);

  let removeCart = useCallback(() => {
    setCount((pc) => {
      return pc - 1;
    });

    console.log("callback remove");
  }, []);
  console.log("parent cart");

  return (
    <div>
      <h1>Cart: {count}</h1>
      <div className={cartstyles.cart}>
        {cartData.map(({ id, title, price, image }) => {
          return (
            <CartItems
              key={id}
              title={title}
              price={price}
              image={image}
              getCartData={getCartData}
              removeCart={removeCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
