import React from "react";

export class AddTask extends React.Component {

  render() {
    return (
      <div className="container add-task">
        <p>Add TODO</p>
        <div className="input-wrapper">
          <input className="input" type="text" />
          <button className="add-button">Add</button>
        </div>
      </div>
    )
  }
}