import React from "react";

export class Task extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const checkbox;
    const completed = this.props.task.status === 'completed';
    if (completed) {
      checkbox = <input type="checkbox" className="checkbox" onClick={this.props.statusChange} checked={completed} />;
    } else {
      checkbox = <input type="checkbox" className="checkbox" onClick={this.props.statusChange} checked={completed} />;
    }

    return (
      <div className="task">
        <div className="task-header">
          <h4>{this.props.task.title}</h4>
          <p>{this.props.task.status}</p>
        </div>
        <div className="task-footer">
          {checkbox}
          <span />
          <button className="delete-button" onClick={this.props.deleteTask}>Delete</button>
        </div>
      </div>
    )
  }
}