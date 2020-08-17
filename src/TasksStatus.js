import React from "react";

export class TasksStatus extends React.Component {

  render() {
    return (
      <div className="tasks-status">
        <p>Compeleted tasks: 0</p>
        <p>TODO tasks: 0</p>
      </div>
    )
  }
}