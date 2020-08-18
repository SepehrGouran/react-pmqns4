import React from "react";
import {AddTask} from "./AddTask";
import {TasksList} from "./TasksList";

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        // {title: 'Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 ', status: 'todo'},
        // {title: 'Task 2', status: 'completed'},
        // {title: 'Task 3', status: 'completed'},
        // {title: 'Task 4', status: 'todo'},
      ],
      newTask: {
        title: '', status: 'todo'
      }
    }

    // this.handelAddTask = this.handelAddTask.bind(this);
  }

  handelValueChange = (event) => {
    this.setState({
      newTask: {
        title: event.target.value,
        status: 'todo'
      }
    })
  }

  handelAddTask = () => {
    if (this.state.newTask.title !== '') {
      this.state.tasks.push(this.state.newTask);
      this.setState({tasks: this.state.tasks, newTask: {title: ''}});
    }
  }

  handelStatusChange = (index) => {
    const status = this.state.tasks[index].status;
    if (status === 'todo') {
      this.state.tasks[index].status = 'completed';
      this.setState({tasks: this.state.tasks});
    } else {
      this.state.tasks[index].status = 'todo';
      this.setState({tasks: this.state.tasks});
    }    
  }

  handelDeleteTask = (index) => {
    this.state.tasks.splice(index, 1);
    this.setState({tasks: this.state.tasks});
  }

  render() {
    return (
      <div className="background">
        <div className="add-task-cotainer">
          <AddTask 
          tasks={this.state.tasks}
          newTaskValue={this.state.newTask.title}
          newTaskValueChange={this.handelValueChange}
          addTask={this.handelAddTask}/>
        </div>
        <div className="tasks-list">
          <TasksList  
          deleteTask={this.handelDeleteTask}
          statusChange={this.handelStatusChange}
          tasks={this.state.tasks} />
        </div>
        <p>{JSON.stringify(this.state)}</p>
      </div>
    )
  }
}