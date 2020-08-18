import React from "react";

export class TasksStatus extends React.Component {

  render() {

    const todoCount = 0;
    const compeletedCount = 0;

    this.props.tasks.map(task => {
      if (task.status === 'todo') {
        todoCount++;
      } else if (task.status === 'completed') {
        compeletedCount++;
      }

    });


    return (
      <div className="tasks-status">
        <p>Compeleted tasks: {compeletedCount}</p>
        <p>TODO tasks: {todoCount}</p>
      </div>
    )
  }
}