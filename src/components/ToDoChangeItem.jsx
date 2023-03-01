import React from "react";
import { HiCheck } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { useTodo } from "../hooks/useTodo";

export const ToDoChangeItem = ({ id }) => {
  const {
    newText,
    setNewText,
    onChangedToDoItem,
    closeChangedBubble,
    setCloseChangedBubble,
  } = useTodo();

  return (
    <div className={`todo-change-item ${closeChangedBubble ? "close" : ""}`}>
      <input
        type="text"
        placeholder="Change this task..."
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={() => onChangedToDoItem(id)}>
        <HiCheck />
      </button>

      <button onClick={setCloseChangedBubble}>
        <HiXMark />
      </button>
    </div>
  );
};
