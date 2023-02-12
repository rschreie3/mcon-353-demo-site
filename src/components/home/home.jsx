// import logo from './logo.svg'; moved from app.js so doesn't work
// import './App.css';
import * as React from 'react';
import "./home.css";
import NavBar from "./navbar.jsx";
import BabysittingCard from "./babysittingCard.jsx";
import TutoringCard from "./tutoringCard.jsx";
import OfficeJobsCard from "./officeJobsCard.jsx";
import Carousel from "./carousel.jsx";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// const CustomizedButton = styled (Button)`
//   color: red;
//   :hover {
//     color: blue;
//   }
// `;

export const Home = () => { //react components have to start with a capital (also changed it from function to const and added the =()=>)
  return (
    <div className="App"> {/*might want to refactor classname app to class name home */}
      <header className="App-header">
        <NavBar/>
        <img src= "./images/babysitting"/>
      </header>
      <body>
        {/* <Carousel/> */}
        <BabysittingCard/>
        <TutoringCard/>
        <OfficeJobsCard/>
      </body>
        
      <footer>
      
      </footer>
    </div>
  );
}