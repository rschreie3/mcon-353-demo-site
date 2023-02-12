// import logo from './logo.svg'; moved from app.js so doesn't work
// import './App.css';
import * as React from "react";
import "./home.css";
import NavBar from "./navbar.jsx";
import BabysittingCard from "./babysittingCard.jsx";
import TutoringCard from "./tutoringCard.jsx";
import OfficeJobsCard from "./officeJobsCard.jsx";
import Carousel from "./carousel.jsx";
import Grid from '@mui/material/Grid';

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { AlignHorizontalCenter } from "@mui/icons-material";

// const CustomizedButton = styled (Button)`
//   color: red;
//   :hover {
//     color: blue;
//   }
// `;

export const Home = () => {
  //react components have to start with a capital (also changed it from function to const and added the =()=>)
  return (
    <div className="App">
      {" "}
      {/*might want to refactor classname app to class name home */}
      <header className="App-header">
        <NavBar />
        <img
          src={process.env.PUBLIC_URL + 'images/website_goal.png'}
          alt="a platform to connect the flatbush jewish community"
          height = {100}
          width = {500}
        />
      </header>
      <body>
        {/* <Carousel/> */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <BabysittingCard />
          </Grid>
          <Grid item xs={6}>
            <TutoringCard />
          </Grid>
          <Grid item xs={6}>
            <OfficeJobsCard />
          </Grid>
        </Grid>
      </body>
      <footer></footer>
    </div>
  );
};
