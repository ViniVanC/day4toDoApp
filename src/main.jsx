import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToDoProvider } from "./hooks/useTodo";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </React.StrictMode>
);
