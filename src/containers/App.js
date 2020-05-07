import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";

// import Validation from "./Validation/Validation";
// import Char from "./Char/Char";

class App extends Component {
  // state = {
  //   userInput: "",
  // };

  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "1", name: "Dragana", age: 27 },
      { id: "2", name: "Mladen", age: 31 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot App" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App.js] componentDidUpdate");
    console.log(snapshot);
  }

  shouldComponentUpdate() {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

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
    console.log("[App.js] render");

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
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

    return (
      // <StyleRoot>
      <div className="App">
        {/* <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList} */}

        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}

        {/* <UserInput
          changed={this.usernameChangedHendler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="gaga" /> */}
      </div>
    );
  }
}

export default App;
