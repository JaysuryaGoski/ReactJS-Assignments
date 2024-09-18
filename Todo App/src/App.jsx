import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="card">
      <h1>My Todo List</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
