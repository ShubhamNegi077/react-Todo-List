import { useState } from "react";
import TodoItem from "./TodoItem";
import useInput from "./useInput";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    "Breakfast",
    "Lunch",
    "Dinner"
  ]);

  const input = useInput();

  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (input.value.trim() === "") {
      return;
    }

    // If editing a task
    if (editingIndex !== null) {
      const newTasks = [...tasks];

      newTasks[editingIndex] = input.value;

      setTasks(newTasks);

      input.setValue("");
      setEditingIndex(null);

      return;
    }

    // Otherwise add a new task
    setTasks([...tasks, input.value]);

    input.setValue("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);

    setTasks(newTasks);
  };

  const editTask = (index) => {
    input.setValue(tasks[index]);

    setEditingIndex(index);
  };

  return (
    <div className="todo-container">

      <h1>TODO LIST</h1>

      <hr />

      <input
        type="text"
        className="todo-input"
        placeholder="add item . . ."
        value={input.value}
        onChange={input.handleChange}
      />

      <button
        className="add-btn"
        onClick={addTask}
      >
        {editingIndex !== null ? "UPDATE" : "ADD"}
      </button>

      <div className="task-list">

        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
            onEdit={() => editTask(index)}
          />
        ))}

      </div>

    </div>
  );
}

export default App;