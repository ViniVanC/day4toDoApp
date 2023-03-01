import React from "react";
import { FaTrash } from "react-icons/fa";
import { useTodo } from "../hooks/useTodo";

export const ToDoItem = ({ id, text, status }) => {
  const { onPerformedToDoItem, onDeleteToDoItem } = useTodo();

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
