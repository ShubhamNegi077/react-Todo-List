function TodoItem({ task, onDelete, onEdit }) {
  return (
    <div className="task">

      <span>{task}</span>

      <div className="task-buttons">
        <button onClick={onDelete}>Delete</button>
        <button onClick={onEdit}>Edit</button>
      </div>

    </div>
  );
}

export default TodoItem;