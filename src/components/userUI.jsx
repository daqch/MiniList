import React from "react";
import choreList from "./choreList";

function userUi(props) {
  return (
    <div class="row">
      <div class="col">
        <form class="form-inline">
          <div class="form-group mb-2"></div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only">
              Password
            </label>
            <input
              //ref="chore"
              class="form-control"
              id="chore"
              placeholder="Add a chore..."
            ></input>
          </div>
          <button
            type="submit"
            class="btn btn-primary mb-2"
            onClick={props.addChore}
          >
            Add to list
          </button>
        </form>
        <select class="form-control form-control-sm" placeholder="Importance">
          <option>Important</option>
          <option>Optional</option>
          <option>Secondary</option>
        </select>
      </div>
      <choreList></choreList>
    </div>
  );
}

export default userUi;
