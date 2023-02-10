import logo from './logo.svg';
// import './App.css';
import { Button } from "@mui/material";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { styled } from '@mui/material/styles';
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";

const CustomizedButton = styled (Button)`
  color: red;
  :hover {
    color: blue;
  }
`;

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
  return <Home />
}

export default App;
