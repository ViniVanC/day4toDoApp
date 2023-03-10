import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { useTodo } from "../hooks/useTodo";
import { ToDoChangeItem } from "./ToDoChangeItem";

export const ToDoItem = ({ id, text, status, change }) => {
  const { onPerformedToDoItem, onDeleteToDoItem, onOpenChangedBubble } =
    useTodo();

  return (
    <div className={`todo-item ${status ? "checked" : ""}`}>
      <button
        className="todo-item__checkbox"
        onClick={() => onPerformedToDoItem(id)}
      />
      <p className="todo-item__text" onClick={() => onPerformedToDoItem(id)}>
        {text}
      </p>

      <div className="btn-box">
        <button
          className="todo-item__btn"
          onClick={() => onOpenChangedBubble(id)}
        >
          <FaPen />
        </button>
        <button
          className="todo-item__btn todo-item__delete-btn"
          onClick={() => onDeleteToDoItem(id)}
        >
          <FaTrash />
        </button>
      </div>

      <ToDoChangeItem id={id} change={change} />
    </div>
  );
};
