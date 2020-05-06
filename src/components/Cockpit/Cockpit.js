import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  font: ingerit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;
const cockpit = (props) => {
  let classes = [];
  if (props.persons.length <= 2) {
    classes.push("red"); // classes = ["red"]
  }

  if (props.persons.length <= 1) {
    classes.push("bold"); // classes = ["red","bold"]
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is realy working</p>
      <StyledButton onClick={props.clicked}>Toggle Persons</StyledButton>
    </div>
  );
};
export default cockpit;
