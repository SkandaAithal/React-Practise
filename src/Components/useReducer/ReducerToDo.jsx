import React, { useReducer, useRef, useState } from "react";
import Todostyle from "../../css/Todo.module.css";
import useReducerHook from "../customHooks/useReducerHook";

const ReducerToDo = () => {
  let [task, setTask] = useState("");
  let { state, dispatch } = useReducerHook();
  let inputTask = useRef();

  console.log("todo");
  function taskdata({ target: { value } }) {
    setTask(value);
  }

  return (
    <div className={Todostyle.container}>
      <div className={Todostyle.wrapper}>
        <div className={Todostyle.flex}>
          <input
            type="text"
            ref={inputTask}
            placeholder="task"
            onChange={taskdata}
            value={task}
          />
          <button
            className={Todostyle.add}
            onClick={() => {
              if (task !== "") {
                dispatch({ type: "add", payload: task });
                inputTask.current.style.border = "none";
              } else {
                inputTask.current.style.border = "2px solid red";
              }

              setTask("");
            }}
          >
            ADD
          </button>
        </div>

        {state.map((ele, index) => {
          return (
            <div className={Todostyle.flex1} key={index}>
              <span>{ele}</span>
              <button
                onClick={() => {
                  dispatch({ type: "delete", id: index });
                }}
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReducerToDo;
