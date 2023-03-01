import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 } from "uuid";

const ToDoContext = createContext();
export const useTodo = () => useContext(ToDoContext);

export const ToDoProvider = ({ children }) => {
  // зберігає данні у localStorage
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("day4-todo-app-todoList")) || []
  );

  // зберігає введені у ToDoAddItem дані
  const [change, setChange] = useState("");

  // оновлює localStorage, якщо змінився масив todo
  useEffect(() => {
    localStorage.setItem("day4-todo-app-todoList", JSON.stringify(todo));
  }, [todo]);

  // функція спрацює якщо користувач відмітив задачу як виконану
  const onPerformedToDoItem = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  // функція для додавання нового завдання у масив todo
  const onAddToDoItem = (e) => {
    e.preventDefault();

    if (change !== "")
      setTodo([...todo, { id: v4(), status: false, text: change }]);

    setChange("");
  };

  // функція видалення завдання
  const onDeleteToDoItem = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <ToDoContext.Provider
      value={{
        todo,
        setTodo,
        change,
        setChange,
        onPerformedToDoItem,
        onAddToDoItem,
        onDeleteToDoItem,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
