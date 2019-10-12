import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  onInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div class="container">
        <h1>Welcome to React</h1>
        <input
          placeholder="What is your name?"
          value={this.state.name}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <p>Welcome {this.state.name}</p>
      </div>
    );
  }
}

export default App;
