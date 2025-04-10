// src/components/TODOList.jsx

import React from "react";
import './TODOList.css';
function Item({ item, setTodos }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState(item.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: newTitle } : todo
      )
    );
    setIsEditing(false);
  };

  return (
    <li className={`todo_item ${item.is_completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <button className="todo_items_left" onClick={() => setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === item.id ? { ...todo, is_completed: !todo.is_completed } : todo
          )
        )}>
          <svg>
            <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
          </svg>
          <p>{item.title}</p>
        </button>
      )}
      <div className="todo_items_right">
        {!isEditing && (
          <button onClick={handleEdit}>
            <span className="visually-hidden">Edit</span>
            <svg>
              <path d="" />
            </svg>
          </button>
        )}
        <button
          onClick={() =>
            setTodos((prevTodos) =>
              prevTodos.filter((todo) => todo.id !== item.id)
            )
          }
        >
          <span className="visually-hidden">Delete</span>
          <svg>
            <path d="" />
          </svg>
        </button>
      </div>
    </li>
  );
}

function TODOList({ todos, setTodos }) {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos.map((item) => (
          <Item key={item.id} item={item} setTodos={setTodos} />
        ))
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

export default TODOList;