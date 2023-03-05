import logo from "./logo.svg";
// import './App.css';
// import { Button } from "@mui/material";
// import { styled } from '@mui/material/styles';
import React, { useReducer, useState } from "react";
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/header.jsx";
import { TodoContext } from "./state/todo/todo-context";
// import { useState } from "react";
import { todoReducer } from "./state/todo/todo-reducer";

// const CustomizedButton = styled (Button)`
//   color: red;
//   :hover {
//     color: blue;
//   }
// `;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <BubbleChartIcon/>
//       </header>
//       <body>

//       </body>

//       <footer>

//       </footer>
//     </div>
//   );
//}

function App() {
  //return <Home />
  // return <Todo />
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
        </Routes>
      </TodoContext.Provider>
    </HashRouter>
  );
}

export default App;
