import Title from "./Component/Title.js";
import Submit from "./Component/Submit.js";
import Todo from "./Component/Todo.js";
import Taskdone from "./Component/Taskdone";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  state = { submit: "", todo: [], taskDone: [] };

  submitHandler = (input) => {
    this.setState({ submit: input });
  };

  pushValue = () => {
    this.setState({ todo: [...this.state.todo, this.state.submit] });
  };

  completeTask = (value) => {
    const result = this.state.todo.filter((task) => task !== value);
    this.setState({ todo: result, taskDone: [...this.state.taskDone, value] });
  };

  render() {
    return (
      <div className="App">
        <Title />
        <Submit submit={this.submitHandler} pushValue={this.pushValue} />
        <div className="group1">
          <Todo task={this.state.todo} completeTask={this.completeTask} />
          <Taskdone taskdone={this.state.taskDone} />
        </div>
      </div>
    );
  }
}
