import React, { useEffect, useState } from "react";
import "./App.css";
// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      let todoLocal = localStorage.getItem("todos");
      setTodos(JSON.parse(todoLocal));
    }
  };

  return (
    <div>
      <header>
        <h1>Todo List ReactJS</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  );
}

export default App;
