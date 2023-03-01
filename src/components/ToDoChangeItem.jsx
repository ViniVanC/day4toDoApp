import React from "react";
import { HiCheck } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { useTodo } from "../hooks/useTodo";

export const ToDoChangeItem = ({ id, change }) => {
  const { newText, setNewText, onChangedToDoItem, onOpenChangedBubble } =
    useTodo();

  return (
    <div className={`todo-change-item ${change ? "open" : ""}`}>
      <input
        type="text"
        placeholder="Change this task..."
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={() => onChangedToDoItem(id)}>
        <HiCheck />
      </button>

      <button onClick={() => onOpenChangedBubble(id)}>
        <HiXMark />
      </button>
    </div>
  );
};
