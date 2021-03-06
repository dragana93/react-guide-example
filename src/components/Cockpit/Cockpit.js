import React, { useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import AuthContext from "../../context/auth-context";

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
const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 1000);
    toggleButtonRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.js] clean up work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2 useEffect");
    return () => {
      console.log("[Cockpit.js] clean up work in 2nd useEffect");
    };
  });

  let classes = [];
  if (props.personsLength <= 2) {
    classes.push("red"); // classes = ["red"]
  }

  if (props.personsLength <= 1) {
    classes.push("bold"); // classes = ["red","bold"]
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is realy working</p>
      <StyledButton ref={toggleButtonRef} onClick={props.clicked}>
        Toggle Persons
      </StyledButton>
      {/* <AuthContext.Consumer> */}
      {/* {(context) => */}
      <button onClick={authContext.login}>Log in</button>
      {/* } */}
      {/* </AuthContext.Consumer> */}
    </div>
  );
};
export default React.memo(Cockpit);
