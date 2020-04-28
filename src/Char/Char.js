import React from "react";

const char = (props) => {
  const charStyle = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "2px solid black",
    textAlign: "center",
  };

  return (
    <div style={charStyle} onClick={props.clicked}>
      {props.character}
    </div>
  );
};

export default char;
