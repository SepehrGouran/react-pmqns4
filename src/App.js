import React from "react";
import {AddTask} from "./AddTask";
import {TasksList} from "./TasksList";

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {title: 'Default Task', status: 'completed'},
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
      </div>
    )
  }
}