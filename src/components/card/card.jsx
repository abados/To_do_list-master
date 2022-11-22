import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style.css";
export const Card = ({ value, id, handleRemoveTask }) => {
  return (
    <div className="card ">
      <h5 className="card-header header">Task</h5>
      <div className="card-body">
        <p className="card-text">{value}</p>
        <button
          href="#"
          className="btn btn-primary"
          onClick={() => handleRemoveTask(id)}
        >
          Done
        </button>
      </div>
    </div>
  );
};
