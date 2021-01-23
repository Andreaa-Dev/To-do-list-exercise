import React, { Component } from "react";

export default class Smalltask extends Component {
  render() {
    const { small, completeTask, listName } = this.props;

    return (
      <div>
        {listName === "Taskdone" ? null : (
          <button onClick={(event) => completeTask(small)}>Complete</button>
        )}
        {small}
      </div>
    );
  }
}
