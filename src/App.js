import React from "react";
import {AddTask} from "./AddTask";
import {TasksList} from "./TasksList";

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {title: 'Task 1', status: 'todo'},
        {title: 'Task 2', status: 'completed'},
        {title: 'Task 3', status: 'completed'},
        {title: 'Task 4', status: 'todo'},
      ]
    }

    this.handelAddTask = this.handelAddTask.bind(this);
  }

  handelAddTask() {
    this.state.tasks.push({
      title: 'new task', status: 'todo'
    });
    this.setState({tasks: this.state.tasks});
  }

  render() {
    return (
      <div className="background">
        <div className="add-task-cotainer">
          <AddTask />
        </div>
        <div className="tasks-list">
          <TasksList tasks={this.state.tasks} />
        </div>
        <p>{JSON.stringify(this.state.tasks)}</p>
        <button onClick={this.handelAddTask}>Add Task</button>
      </div>
    )
  }
}