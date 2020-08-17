import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap-4-grid/css/grid.css';
import './style.css';
import {AddTask} from "./AddTask";

ReactDOM.render(
  <div className="background">
    <div className="add-task-cotainer">
      <AddTask />
    </div>
  </div>,
  document.getElementById("root")
);
