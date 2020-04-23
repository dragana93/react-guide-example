import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [perosnsState, setPersonsState] = useState({
    persons: [
      { name: "Dragana", age: 27 },
      { name: "Mladen", age: 31 },
    ],
    otherState: "some other value",
  });

  const [otherState, setOtherState] = useState({
    otherState: "some other value",
  });

  console.log(perosnsState, otherState);

  const switchNameHandler = () => {
    console.log("clicked");
    // this.state.persons[0].name = "Gaga";
    setPersonsState({
      persons: [
        { name: "Gaga", age: 27 },
        { name: "Mladjo", age: 31 },
      ],
      // otherState: perosnsState.otherState,
    });
  };

  return (
    <div className="App">
      <Person
        name={perosnsState.persons[0].name}
        age={perosnsState.persons[0].age}
      />
      <Person
        name={perosnsState.persons[1].name}
        age={perosnsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <button onClick={switchNameHandler}>Switch Name</button>
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi, I'm a React app")
  // );
};

export default App;
