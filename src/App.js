import React, { useState, useEffect } from "react";
import "./App.css";
import * as components from "./components";
import useSignUpForm from "./CustomHooks";

function App() {
  const [chores, setChores] = useState([]);
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();

  function handleSubmit = e => {
    continue;
  }

  return (
    <div>
      <components.navbar></components.navbar>
      <div class="container">
        <components.Content></components.Content>
        <div class="row">
          <div class="col">
            <form class="form-inline" onSubmit={handle}>
              <div class="form-group mb-2"></div>
              <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">
                  Password
            </label>
                <input
                  onChange={handleInputChange}
                  value={inputs.choreName}
                  class="form-control"
                  name="name"
                  placeholder="Add a chore..."
                ></input>
              </div>
              <button
                type="submit"
                class="btn btn-primary mb-2"
              >
                Add to list
          </button>
            </form>
            <select name="importance" onChange={handleInputChange} class="form-control form-control-sm" style={{ width: "300px" }} placeholder="Importance">
              <option>Important</option>
              <option>Optional</option>
              <option>Secondary</option>
            </select>
          </div>
          <components.choreList chores={chores}></components.choreList>
        </div>
      </div>
    </div>
  );
}

export default App;
