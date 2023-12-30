import axios from "axios";
import React, { useEffect, useReducer } from "react";

let initialState = {
  dataArray: [],
  isLoading: true,
  isError: false,
};
function ReducerFunction(cstate, action) {
  switch (action.type) {
    case "Fetch_success":
      return { ...cstate, dataArray: action.payload, isLoading: false };
    case "Fetch_fail":
      return { ...cstate, isLoading: false, isError: true, dataArray: [] };
  }
}
const ReducerApiFetch = () => {
  let [state, dispatch] = useReducer(ReducerFunction, initialState);
  console.log("reducer api");
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    let getDatafromApi = async () => {
      try {
        let { data } = await axios.get("https://fakestoreapi.com/products", {
          signal,
        });
        dispatch({ type: "Fetch_success", payload: data });
      } catch (err) {
        dispatch({ type: "Fetch_fail" });
      }
    };
    getDatafromApi();
    return () => controller.abort();
  }, []);

  return (
    <div>
      {state.isLoading && <h1>Loading</h1>}
      {state.isError && <h1>Error</h1>}
      {state.dataArray.map(({ image, id }) => {
        return (
          <div key={id}>
            <img height="200px" src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default ReducerApiFetch;
