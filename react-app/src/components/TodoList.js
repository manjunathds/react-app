import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
