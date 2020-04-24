import React from "react";

const userInput = (props) => {
  const inputStyle = {
    border: "2px solid blue",
  };
  return (
    <div className="UserInput">
      <input
        style={inputStyle}
        type="text"
        onChange={props.changed}
        value={props.currentName}
      />
    </div>
  );
};

export default userInput;
