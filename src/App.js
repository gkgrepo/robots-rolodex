import React, { Component } from "react";
// import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

// function App() {

class App extends Component {
  state = {
    monsters: [
      { name: "Frankenstein", id: 1 },
      { name: "Dracula", id: 2 },
      { name: "Zombie", id: 3 }
    ]
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users });
      });
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
