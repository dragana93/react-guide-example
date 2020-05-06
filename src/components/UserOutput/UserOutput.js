import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p onClick={props.click}>Username: {props.userName}</p>
      <p onClick={props.click}>I hope I will be overwritten! </p>
    </div>
  );
};

export default userOutput;
