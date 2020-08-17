import React from "react";

export class TasksList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.tasks.map(task => <p>{task.title}</p>)}
      </div>
    )
  }
}