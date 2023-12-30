import React, { useState } from "react";

const Todolist = () => {
  let [task, setTask] = useState("");
  let [tasks, setTasks] = useState([]);
  let [bool, setBool] = useState(false);
  let [booldel, setBooldel] = useState(false);
  function takeData({ target: { value } }) {
    setTask(value);
  }

  function addData() {
    setTasks([...tasks, task]);
    setTask("");
    setBool(true);
    setTimeout(() => {
      setBool(false);
    }, 3000);
  }

  function removeData(index) {
    let deleted = tasks.filter((ele, id) => index !== id);
    setTasks(deleted);
    setBooldel(true);
    setTimeout(() => {
      setBooldel(false);
    }, 3000);
  }

  return (
    <div>
      <div>
        {bool && <h1>Data added succesfully</h1>}
        {booldel && <h1>Data deleted succesfully</h1>}
        <input
          type="text"
          placeholder="Task"
          onChange={takeData}
          value={task}
        />
        <button onClick={addData}>Add</button>
      </div>

      <div>
        {tasks.map((ele, id) => {
          return (
            <div key={id}>
              <h1>{ele}</h1>
              <button
                onClick={() => {
                  removeData(id);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
