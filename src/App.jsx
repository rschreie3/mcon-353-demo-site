import logo from "./logo.svg";
import React, { useReducer, useState } from "react";
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/header.jsx";
import { TodoContext } from "./state/todo/todo-context";
import { todoReducer } from "./state/todo/todo-reducer";
import { Chat } from "./components/chat/chat.jsx";

function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: [
      {
        title: "finish homework1",
        isComplete: false,
      },
      {
        title: "sleep1",
        isComplete: false,
      },
    ],
  });

  return (
    <HashRouter>
      <Navbar />
      <TodoContext.Provider value={{ todoState, todoDispatch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </TodoContext.Provider>
    </HashRouter>
  );
}

export default App;
