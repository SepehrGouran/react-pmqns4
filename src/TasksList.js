import React from "react";
import {Task} from './Task';

export class TasksList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {this.props.tasks.map((task, index) => <Task statusChange={() => this.props.statusChange(index)} deleteTask={() => {this.props.deleteTask(index)}} task={task} key={index}/>)}
      </div>
    )
  }
}