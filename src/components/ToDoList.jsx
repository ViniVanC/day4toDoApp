import React from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({
  todo,
  onPerformedToDoItem = (f) => f,
  onDeleteToDoItem = (f) => f,
}) => {
  return (
    <div className="todo-list">
      {todo?.map((item) => (
        <ToDoItem
          key={item.id}
          id={item.id}
          text={item.text}
          status={item.status}
          onPerformedToDoItem={onPerformedToDoItem}
          onDeleteToDoItem={onDeleteToDoItem}
        />
      ))}
    </div>
  );
};
