import React from "react";
import {TasksStatus} from './TasksStatus';

export class AddTask extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="container add-task">
        <p>Add TODO</p>
        <div className="input-wrapper">
          <input className="input" type="text" onChange={this.props.newTaskValueChange} value={this.props.newTaskValue} />
          <button className="add-button" onClick={this.props.addTask}>Add</button>
        </div>
        <TasksStatus tasks={this.props.tasks}/>
      </div>
    )
  }
}