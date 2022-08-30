import React, { useState } from "react";

function App() {
  const [listItem, setListItem] = useState("");

  function handleClick(event) {
    setListItem(listItem);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
          <li name="listItem">{listItem}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
