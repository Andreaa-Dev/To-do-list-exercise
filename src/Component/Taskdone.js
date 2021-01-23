import React, { Component } from "react";
import Smalltask from "./Smalltask";

export default class Taskdone extends Component {
  render() {
    const { taskdone } = this.props;
    return (
      <div>
        <h1>Completed task</h1>
        {taskdone.map((done, index) => (
          <Smalltask small={done} key={index} listName="Taskdone" />
        ))}
      </div>
    );
  }
}
