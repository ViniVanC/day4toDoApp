import React from "react";
import { FaTrash } from "react-icons/fa";

export const ToDoItem = ({
  id,
  text,
  status,
  onPerformedToDoItem = (f) => f,
  onDeleteToDoItem = (f) => f,
}) => {
  return (
    <div className={`todo-item ${status ? "checked" : ""}`}>
      <button
        className="todo-item__checkbox"
        onClick={() => onPerformedToDoItem(id)}
      />
      <p className="todo-item__text" onClick={() => onPerformedToDoItem(id)}>
        {text}
      </p>
      <button
        className="todo-item__delete-btn"
        onClick={() => onDeleteToDoItem(id)}
      >
        <FaTrash />
      </button>
    </div>
  );
};
