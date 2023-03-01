import React from "react";
import { ToDoAddItem } from "./components/ToDoAddItem";
import { ToDoList } from "./components/ToDoList";

const App = () => {
  return (
    <div className="App">
      <h1 className="title">📕 Todo List</h1>
      <ToDoAddItem />
      <ToDoList />
    </div>
  );
};

export default App;
