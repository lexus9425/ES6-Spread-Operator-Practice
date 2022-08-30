import React, { useState } from "react";

function App() {
  
  const [listItem, setListItem] = useState("");
  const [listItems, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setListItem(newValue);
  }

  function addItem() {
    setItems( (prevItems) => {
      return [...prevItems, listItem];
    });
    setListItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={listItem}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map(todoItem => <li>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
