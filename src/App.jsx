import logo from "./logo.svg";
// import './App.css';
// import { Button } from "@mui/material";
// import { styled } from '@mui/material/styles';
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/header.jsx";

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

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
