import React from "react";

function choreList(props) {
  const chores = props.chores;
  const listItems = chores.map((chore) =>
    <li className="list-group-item" key={chore}>{chore}</li>
  );
  return (
    <div className="col">
      <ul class="list-group">
        {listItems}
      </ul>
    </div>
  );
}

export default choreList;
