import React, { useState } from "react";
import Chore from "./Chore";

function ChoreList(props) {
  const [currentElement, changeElement] = useState({});
  const chores = props.chores;
  const handleClick = e => {
    const element = e.target;
    const elements = e.target.parentElement.getElementsByTagName("li");
    for (let item of elements) {
      item.classList.remove("active");
    }
    element.classList.toggle("active");
    var result = chores.filter(chore => {
      return chore.name === element.innerHTML;
    });
    changeElement(result[0]);
    console.log(currentElement);
  };

  const listItems = chores.map(chore => {
    if (chore.importance === "Important")
      return (
        <li
          className="list-group-item list-group-item-action list-group-item-warning"
          key={chore.name}
          onClick={handleClick}
        >
          {chore.name}
        </li>
      );
    return (
      <li
        className="list-group-item list-group-item-action list-group-item-light"
        key={chore.name}
        onClick={handleClick}
      >
        {chore.name}
      </li>
    );
  });

  const chorePreview =
    props.chores.length !== 0 ? (
      <Chore chore={currentElement}></Chore>
    ) : (
      <p></p>
    );

  return (
    <div className="row">
      <div class="col">
        <ul className="list-group" style={{ width: "100%", marginTop: "30px" }}>
          {listItems}
        </ul>
      </div>
      <div className="col">{chorePreview}</div>
    </div>
  );
}

export default ChoreList;
