import { useState } from "react";
import "./TaskForm.css";

function TaskForm({ handleAddTask }) {
  const [taskText, setTaskText] = useState("");
  const [taskPriority, setTaskPriority] = useState("Baja"); // Prioridad predeterminada

  const handleTaskChange = (e) => {
    setTaskText(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setTaskPriority(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (taskText.trim() !== "") {
      handleAddTask(taskText, taskPriority); // Pasa la prioridad a la función de agregar tarea
      setTaskText("");
      setTaskPriority("Low"); // Restablece la prioridad a "Baja" después de agregar
    }
  };

  return (
    <div className="task-form-container">
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={handleTaskChange}
      />
      <div className="priorityBox">
        <h1>Priority:</h1>
     
      <select className="priority" value={taskPriority} onChange={handlePriorityChange}>
        <option  value="Low">Low</option>
        <option  value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
           <button onClick={handleAddButtonClick}>Add</button>
      </div>
 
      
    </div>
  );
}

export default TaskForm;