import React from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <Person name="Dragana" age="27" />
      <Person name="Mladen" age="31" />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi, I'm a React app")
  // );
}

export default App;
