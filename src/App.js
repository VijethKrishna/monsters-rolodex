import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this); // if class methods are not used as arrow funtions
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.json().then((users) => this.setState({ monsters: users }));
    });
  }
  render() {
    const { monsters, searchField} = this.state;
    // Filter monsters based on the searchfield which then is passed on the the card list
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField));
    return (
      <div className="App">
        <h1 className="page-title">Monster's rolodex</h1>
        <SearchBox placeholder="Search for monsters" handleChange={this.handleChange} ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
