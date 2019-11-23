import React from "react";

function Chore(props) {
  const element = props.chore;

  const details =
    element.name === undefined ? (
      <h1>Select an item to see more details</h1>
    ) : (
      <div>
        <p>Name: {element.name}</p>
        <p>Importance : {element.importance}</p>
      </div>
    );

  return (
    <div class="col">
      <ul>{details}</ul>
    </div>
  );
}

export default Chore;
