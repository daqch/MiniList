import React, { Component } from "react";
import "./App.css";
import * as components from "./components";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chores: [],
      newChore: ""
    };
  }

  addChore = () => {
    if (this.refs.chore.value.length > 4) {
      this.setState(state => {
        const chores = state.chores.concat(this.refs.chore.value);
        console.log(chores);

        return {
          chores
        };
      });
    }
  };

  displayState = () => {
    console.log(this.state.chores);
  };

  render() {
    return (
      <div>
        <components.navbar></components.navbar>
        <div class="container">
          <components.Content></components.Content>
          <components.userUi action={this.addChore}></components.userUi>
        </div>
      </div>
    );
  }
}

export default App;
