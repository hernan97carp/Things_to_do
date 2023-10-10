import { useState } from "react";
import "./TaskForm.css";
function TaskForm({ handleAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleTaskChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (taskText.trim() !== "") {
      handleAddTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div className="task-form-container">
      {" "}
      {/* Contenedor con clase para centrar */}
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={handleTaskChange}
      />
      <button onClick={handleAddButtonClick}>Add</button>
    </div>
  );
}

export default TaskForm;
