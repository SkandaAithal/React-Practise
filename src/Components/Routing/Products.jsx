import React from "react";
import ReducerApiFetch from "../useReducer/ReducerApiFetch";
import Cart from "../Cart";
import ReducerToDo from "../useReducer/ReducerToDo";
import Cards from "../Cards";
import Buttons from "../Buttons";
import Readmore from "../Readmore";
const Products = () => {
  console.log("products");
  return (
    <>
      <ReducerApiFetch />
      <Cart />
      <ReducerToDo />
      <Cards />
      <Buttons />
      <Readmore />
    </>
  );
};

export default Products;
