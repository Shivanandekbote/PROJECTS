// src/components/Form.jsx
import React from "react";
import "./Form.css";

function Form({ setTodos }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.todo.value.trim();
    if (value === "") return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { title: value, id: self.crypto.randomUUID(), is_completed: false },
    ]);

    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
        />
      </label>
      <button type="submit" className="add-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </form>
  );
}

export default Form;