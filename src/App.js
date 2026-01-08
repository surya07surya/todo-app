import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Add Todo
  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  // Delete Todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Start Editing
  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  // Update Todo
  const updateTodo = () => {
    if (editValue.trim() === "") return;
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = editValue;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="todo-app">
      <div className="todo-header">
        <h1>Todo List</h1>
        <p>Plan your tasks efficiently</p>
      </div>

      <div className="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((item, index) => (
          <li key={index} className="todo-item">
            {editIndex === index ? (
              <>
                <input
                  className="edit-input"
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button className="todo-update" onClick={updateTodo}>
                  Update
                </button>
              </>
            ) : (
              <>
                <span className="todo-text">{item}</span>
                <div>
                  <button
                    className="todo-edit"
                    onClick={() => startEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="todo-delete"
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

