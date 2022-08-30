import React, { useState } from "react";

function App() {
  
  const [listItem, setListItem] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setListItem(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={listItem}/>
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
