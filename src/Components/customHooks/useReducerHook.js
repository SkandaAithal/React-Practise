import React, { useReducer } from "react";

export default function useReducerHook() {
  function reducerFunction(cstate, { type, payload, id }) {
    switch (type) {
      case "add":
        return [...cstate, payload];
      case "delete":
        return cstate.filter((ele, index) => index !== id);
      default:
        return cstate;
    }
  }
  let [state, dispatch] = useReducer(reducerFunction, []);
  return { state, dispatch };
}
export { useReducerHook };
