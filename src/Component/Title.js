import React, { Component } from "react";
import styled from "styled-components";

const TitleCss = styled.h1`
  color: black;
`;
export default class Title extends Component {
  render() {
    return (
      <div>
        <TitleCss>To Do </TitleCss>
      </div>
    );
  }
}
