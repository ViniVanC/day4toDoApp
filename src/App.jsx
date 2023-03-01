import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { ToDoAddItem } from "./components/ToDoAddItem";
import { ToDoList } from "./components/ToDoList";

const App = () => {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("day4-todo-app-todoList")) || []
  );
  const [change, setChange] = useState("");

  useEffect(() => {
    localStorage.setItem("day4-todo-app-todoList", JSON.stringify(todo));
  }, [todo]);

  const onPerformedToDoItem = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const onAddToDoItem = (e) => {
    e.preventDefault();
    if (change !== "")
      setTodo([...todo, { id: v4(), status: false, text: change }]);

    setChange("");
  };

  const onDeleteToDoItem = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1 className="title">📕 Todo List</h1>
      <ToDoAddItem
        change={change}
        setChange={setChange}
        onAddToDoItem={onAddToDoItem}
      />
      <ToDoList
        todo={todo}
        onPerformedToDoItem={onPerformedToDoItem}
        onDeleteToDoItem={onDeleteToDoItem}
      />
    </div>
  );
};

export default App;
