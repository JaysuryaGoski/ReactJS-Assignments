import { useState } from "react";
import PropTypes from 'prop-types';

function AddTodo({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new Todo"
      />
    </div>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
