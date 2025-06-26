import React, { Component } from "react";
import './TaskList.css'

class TaskList extends React.Component {
  static tasks = [
    { id: 1, text: "Купити хліб" },
    { id: 2, text: "Вивчити React" },
  ];

  addTask = () => {
    const text = prompt("Введи нове завдання:");
    if (text) {
      TaskList.tasks.push({ id: TaskList.tasks.length + 1, text });
      this.forceUpdate();
    }
  };

  deleteTask = (id) => {
    const index = TaskList.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      TaskList.tasks.splice(index, 1); 
      this.forceUpdate(); 
    }
  };

  render() {
    return (
      <div className="wrap">
        <button className="add" onClick={this.addTask}>
          Додати завдання
        </button>
        <ul className="list">
          {TaskList.tasks.map((task) => (
            <li className="item" key={task.id}>
              <h2 className="subtitle">{task.text}</h2>
              <button className="delete" onClick={() => this.deleteTask(task.id)}>Видалити</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TaskList;