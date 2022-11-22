import React, { useState } from "react";
import "./style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
export const Header = ({ getTask }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    console.log("enter");
    setMessage(event.target.value);
  };
  const handleClick = (event) => {
    // 👇️ value of input field
    event.preventDefault();
    getTask(message);
  };
  return (
    <div>
      <h1>Today work items that should be done</h1>
      <div className="container">
        <div className="input-group mb-3 add">
          <input
            type="text"
            className="form-control"
            placeholder="Add New Task"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={handleChange}
            value={message}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleClick}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};
