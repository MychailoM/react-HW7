import React from "react";
import TaskList from "./TaskList";
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Завдання</h1>
      <TaskList />
    </div>
  );
}

export default App;
