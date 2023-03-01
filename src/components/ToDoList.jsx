import React from "react";
import { useTodo } from "../hooks/useTodo";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = () => {
  const { todo } = useTodo();

  return (
    <div className="todo-list">
      {todo?.map((item) => (
        <ToDoItem
          key={item.id}
          id={item.id}
          text={item.text}
          status={item.status}
          change={item.change}
        />
      ))}
    </div>
  );
};
