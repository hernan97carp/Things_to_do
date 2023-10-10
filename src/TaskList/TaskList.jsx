import "./TaskList.css";
function TaskList({ tasks, handleDeleteTask }) {
  return (
    <div className="task">
      <ul className="task-list">
        {tasks.map((task, index) => (
          
          <li key={index}>
             <p className="prioridad">Priority: {task.priority}</p> 
            <p className="prioridadText">{task.text}</p>
          
            <button className="buttonList" onClick={() => handleDeleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
