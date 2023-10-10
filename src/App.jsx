import "./App.css";
import { useState } from "react";
import TaskList from "./TaskList/TaskList";
import TaskForm from "./TaskForm/TaskForm";
function App() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const handleDeleteTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };
  return (
    <>
      <div className="App">
        <h1 className="title">
Things to do</h1>
        <TaskForm handleAddTask={handleAddTask} />
        <TaskList handleDeleteTask={handleDeleteTask} tasks={tasks} />
      </div>
    </>
  );
}

export default App;
