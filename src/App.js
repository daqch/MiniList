import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Content from "./components/Content";

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
        <Navbar></Navbar>
        <div class="container">
          <Content chores={this.state.chores}></Content>
          <div class="row">
            <div class="col">
              <form class="form-inline">
                <div class="form-group mb-2"></div>
                <div class="form-group mx-sm-3 mb-2">
                  <label for="inputPassword2" class="sr-only">
                    Password
                  </label>
                  <input
                    ref="chore"
                    class="form-control"
                    id="chore"
                    placeholder="Add a chore..."
                  ></input>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary mb-2"
                  onClick={this.addChore}
                >
                  Add to list
                </button>
              </form>
              <select
                class="form-control form-control-sm"
                placeholder="Importance"
              >
                <option>Important</option>
                <option>Optional</option>
                <option>Secondary</option>
              </select>
            </div>
            <div class="col">
              <p>Your chores will appear here</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
