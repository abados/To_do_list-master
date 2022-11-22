import React, { useState } from "react";
import { Card } from "../card/card";
import { Header } from "../header/Header";

export const ToDoList = (props) => {
  let [tasksArr, setTask] = useState([]);

  const handleTask = (e) => {
    let o = {
      text: e,
      id: tasksArr.length + 1,
    };
    if (e) {
      let tasks = [...tasksArr, o];
      setTask(tasks);
    }
  };

  const handleRemoveTask = (id) => {
    let newtasksArr = tasksArr.filter((item) => item.id !== id);
    setTask(newtasksArr);
  };

  return (
    <div>
      <Header getTask={handleTask}></Header>
      {console.log("inside", tasksArr)}
      {tasksArr &&
        tasksArr.length > 0 &&
        tasksArr.map((m) => {
          return (
            <Card
              key={m.id}
              value={m.text}
              id={m.id}
              handleRemoveTask={handleRemoveTask}
            />
          );
        })}
    </div>
  );
};
