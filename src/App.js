import React, { useState, useEffect } from "react";
import "./App.css";
import * as components from "./components";
import useSignUpForm from "./CustomHooks";

function App() {
  const [chores, setChores] = useState([]);
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();

  const handle = e => {
    e.preventDefault();
    if (
      inputs.name === "" ||
      inputs.name === "" ||
      chores.some(e => e.name === inputs.name)
    ) {
      alert("Chore already exists or fields are empty!");
    } else {
      setChores(chores.concat([inputs]));
    }
  };

  return (
    <div>
      <components.navbar></components.navbar>
      <div className="container">
        <components.Content></components.Content>
        <div className="row">
          <div className="col">
            <form className="form-inline" onSubmit={handle}>
              <div className="form-group mb-2"></div>
              <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputPassword2" className="sr-only">
                  Password
                </label>
                <input
                  onChange={handleInputChange}
                  value={inputs.name}
                  className="form-control"
                  name="name"
                  placeholder="Add a chore..."
                ></input>
              </div>
              <button type="submit" className="btn btn-dark mb-2">
                Add to list
              </button>
            </form>
            <select
              name="importance"
              value={inputs.importance}
              onChange={handleInputChange}
              className="form-control form-control-sm"
              style={{ width: "300px" }}
              placeholder="Importance"
            >
              <option>Important</option>
              <option>Optional</option>
              <option>Secondary</option>
            </select>
          </div>
        </div>
        <components.choreList chores={chores}></components.choreList>
      </div>
      <components.About></components.About>
    </div>
  );
}

export default App;
