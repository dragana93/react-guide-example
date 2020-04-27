import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    persons: [
      { name: "Dragana", age: 27 },
      { name: "Mladen", age: 31 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  // state = {
  //   username: "supergaga",
  // };

  switchNameHandler = (newName) => {
    console.log("clicked");
    // this.state.persons[0].name = "Gaga";
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: "Mladjo", age: 31 },
      ],
      // otherState: perosnsState.otherState,
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 27 },
        { name: "Mladjo", age: 31 },
      ],
    });
  };

  usernameChangedHendler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "ingerit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangeHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Ga!")}
          >
            My Hobbies: Racing
          </Person>
        </div>
      );
    }

    return (
      <div className="App">
        {/* <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangeHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Ga!")}
          >
            My Hobbies: Racing
          </Person>
        </div> */}
        {persons}

        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {/* <UserInput
          changed={this.usernameChangedHendler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="gaga" /> */}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi, I'm a React app")
    // );
  }
}

export default App;
