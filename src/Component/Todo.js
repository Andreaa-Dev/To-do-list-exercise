import React, { Component } from "react";
import Smalltask from "./Smalltask";

export default class Todo extends Component {
  render() {
    const { task, completeTask } = this.props;

    return (
      <div>
        <h1>To do list</h1>
        {task.map((smallTask, index) => (
          <Smalltask
            small={smallTask}
            key={index}
            completeTask={completeTask}
            listName="ToDo"
          />
        ))}
      </div>
    );
  }
}
