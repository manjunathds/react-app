import React, { useEffect } from "react";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
  editTodo,
  setEditTodo,
}) => {
  // Events
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const updateTodo = (text, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { text, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInputText(editTodo.text);
    } else {
      setInputText("");
    }
  }, [setInputText, editTodo]);

  const submitTodoHandler = (e) => {
    e.preventDefault();

    if (!editTodo) {
      if (inputText) {
        setTodos([
          ...todos,
          { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
      }
    } else {
      updateTodo(inputText, editTodo.id, editTodo.completed);
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        autoFocus={true}
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        {editTodo ? (
          <i className="fas fa-check"></i>
        ) : (
          <i className="fas fa-plus-square"></i>
        )}
      </button>
    </form>
  );
};

export default Form;
