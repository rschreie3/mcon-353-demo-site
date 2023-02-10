// import logo from './logo.svg'; moved from app.js so doesn't work
// import './App.css';
import "./home.css";
import { Button } from "@mui/material";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { styled } from '@mui/material/styles';

const CustomizedButton = styled (Button)`
  color: red;
  :hover {
    color: blue;
  }
`;

export const Home = () => { //react components have to start with a capital (also changed it from function to const and added the =()=>)
  return (
    <div className="App"> {/*might want to refactor classname app to class name home */}
      <header className="App-header">
        <BubbleChartIcon/>
        
      </header>
      <body>
        
      </body>

      <footer>
        
      </footer>
    </div>
  );
}