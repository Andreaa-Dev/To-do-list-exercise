import React, { Component } from "react";

export default class Submit extends Component {
  render() {
    return (
      <div>
        <input
          onChange={(event) => this.props.submit(event.target.value)}
          type="text"
        />
        <button onClick={(event) => this.props.pushValue()}>Submit</button>
      </div>
    );
  }
}
