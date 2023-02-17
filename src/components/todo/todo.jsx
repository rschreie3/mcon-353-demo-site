import { CheckBox } from "@mui/icons-material";
import React, { useState } from "react";
import NavBar from "../header/header.jsx";

export const Todo = () => {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([
    {
      title: "finish homework",
      isComplete: false,
    },
    {
      title: "sleep",
      isComplete: false,
    },
  ]);

  const toggleChecked = (todo) => {
    const newTodos = [...todos];
    const updatedTodo = newTodos.find((x) => x.title === todo.title);
    updatedTodo.isComplete = !todo.isComplete;
    setTodos(newTodos);
  };

  const onInput = (event) => {
    setInput(event.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, { title: input, isComplete: false }]);
    setInput("");
  };

  return (
    <div>
      <h1>Todos</h1>
      <input onInput={onInput} value={input} />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo, index) => (
        <p key={index}>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => toggleChecked(todo)}
          />
          {todo.title}
        </p>
      ))}
    </div>
  );
};
