import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { useTodo } from "../hooks/useTodo";
import { ToDoChangeItem } from "./ToDoChangeItem";

export const ToDoItem = ({ id, text, status }) => {
  const { onPerformedToDoItem, onDeleteToDoItem, setCloseChangedBubble } =
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
      <button className="todo-item__btn" onClick={setCloseChangedBubble}>
        <FaPen />
      </button>
      <button
        className="todo-item__btn todo-item__delete-btn"
        onClick={() => onDeleteToDoItem(id)}
      >
        <FaTrash />
      </button>
      <ToDoChangeItem id={id} />
    </div>
  );
};
