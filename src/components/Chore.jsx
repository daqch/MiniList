import React from "react";

function Chore(props) {
  const element = props.chore;

  const details =
    element.name === undefined ? (
      <h1>Select an item to see more details</h1>
    ) : (
        <div>
          <div className="card bg-light mb-3" style={{ maxWidth: "30  rem" }}>
            <div className="card-header">Chore details</div>
            <div className="card-body">
              <h5 className="card-title">{element.name}</h5>
              <p className="card-text">{element.importance}</p>
            </div>
          </div>
        </div>
      );

  return (
    <div className="col">

      <ul>{details}</ul>
    </div>
  );
}

export default Chore;
