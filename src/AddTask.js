import React from "react";
import {TasksStatus} from './TasksStatus';

export class AddTask extends React.Component {

  constructor(props) {
    super(props);
    this.handelAddTask = this.handelAddTask.bind(this);
  }

  handelAddTask() {
    alert('add task');
  }

  render() {
    return (
      <div className="container add-task">
        <p>Add TODO</p>
        <div className="input-wrapper">
          <input className="input" type="text" />
          <button className="add-button" onClick={this.handelAddTask}>Add</button>
        </div>
        <TasksStatus />
      </div>
    )
  }
}