import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 } from "uuid";

const ToDoContext = createContext();
export const useTodo = () => useContext(ToDoContext);

export const ToDoProvider = ({ children }) => {
  // зберігає данні у localStorage
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("day4-todo-app-todoList")) || []
  );

  const [change, setChange] = useState(""); // зберігає введені у ToDoAddItem дані
  const [newText, setNewText] = useState(""); // зберігається новий текст коли користувач хоче змінити завдання

  // оновлює localStorage, якщо змінився масив todo
  useEffect(() => {
    localStorage.setItem("day4-todo-app-todoList", JSON.stringify(todo));
  }, [todo]);

  // функція для додавання нового завдання у масив todo
  const onAddToDoItem = (e) => {
    e.preventDefault();

    if (change !== "") {
      setTodo([
        ...todo,
        { id: v4(), status: false, text: change, change: false },
      ]);
    }

    setChange("");
  };
  // функція спрацює якщо користувач відмітив задачу як виконану
  const onPerformedToDoItem = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  // відкриває бульбашку
  const onOpenChangedBubble = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, change: !item.change } : item
      )
    );
  };

  // функція для зміни завдання
  const onChangedToDoItem = (id) => {
    if (newText !== "") {
      setTodo(
        todo.map((item) =>
          item.id === id
            ? { ...item, change: !item.change, text: newText }
            : item
        )
      );
    }

    setNewText("");
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
        newText,
        setNewText,
        onOpenChangedBubble,
        onAddToDoItem,
        onPerformedToDoItem,
        onChangedToDoItem,
        onDeleteToDoItem,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
