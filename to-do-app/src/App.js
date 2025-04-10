import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import TODOList from "./components/TODOList";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  // Toggle dark mode
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="wrapper">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="theme-toggle"
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <Header
        totalTasks={todos.length}
        completedTasks={todos.filter((todo) => todo.is_completed).length}
      />
      <TODOHero
        todos_completed={todos.filter((todo) => todo.is_completed).length}
        total_todos={todos.length}
      />
      <Form setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;