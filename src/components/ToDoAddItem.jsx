import React from "react";
import { FaPlus } from "react-icons/fa";

export const ToDoAddItem = ({ change, setChange, onAddToDoItem }) => {
  return (
    <form className="todo-add-item" onSubmit={onAddToDoItem}>
      <input
        type="text"
        placeholder="Enter the task..."
        value={change}
        onChange={(e) => setChange(e.target.value)}
      />
      <button>
        <FaPlus />
      </button>
    </form>
  );
};
