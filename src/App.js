import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";

// import Validation from "./Validation/Validation";
// import Char from "./Char/Char";

const StyledButton = styled.button`
  background-color: "green";
  color: white;
  font: ingerit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

class App extends Component {
  // state = {
  //   userInput: "",
  // };

  state = {
    persons: [
      { id: "1", name: "Dragana", age: 27 },
      { id: "2", name: "Mladen", age: 31 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  // state = {
  //   username: "supergaga",
  // };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]); alternative
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  usernameChangedHendler = (event, id) => {
    this.setState({
      username: event.target.value,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  // inputChangedHandler = (event) => {
  //   this.setState({ userInput: event.target.value });
  // };

  // deleteCharHandler = (index) => {
  //   const text = [...this.state.userInput.split("")];
  //   text.splice(index, 1);
  //   const updatedText = text.join("");
  //   this.setState({ userInput: updatedText });
  // };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "ingerit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    // const charList = this.state.userInput.split("").map((ch, index) => {
    //   return (
    //     <Char
    //       clicked={() => this.deleteCharHandler(index)}
    //       character={ch}
    //       key={index}
    //     />
    //   );
    // });

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ["red"]
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ["red","bold"]
    }

    return (
      // <StyleRoot>
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

        {/* <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList} */}
        <p className={classes.join(" ")}>This is realy working</p>

        {persons}

        <StyledButton onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>

        {/* <UserInput
          changed={this.usernameChangedHendler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="gaga" /> */}
      </div>
      // </StyleRoot>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi, I'm a React app")
    // );
  }
}

export default App;
