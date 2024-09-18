import { useState } from "react";
import PropTypes from 'prop-types';

function TodoItem({ todo, index, deleteTodo, editTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [isHovered, setIsHovered] = useState(false);

  const handleEdit = () => {
    editTodo(index, newText);
    setIsEditing(false);
  };

  return (
    <div 
      className="todo-item" 
      onMouseEnter={() => setIsHovered(true)}  
      onMouseLeave={() => setIsHovered(false)} 
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleEdit();
          }}
        />
      ) : (
        <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      {isHovered && (
        <button onClick={() => deleteTodo(index)}>Delete</button>
      )}
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TodoItem;
