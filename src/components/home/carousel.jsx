import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function MyCarousel(props) {
  var items = [
    {
      image: <img src="./images/babysitting.jpg" height={600} width={800} />,
      description: "Babysitting",
    },
    {
      image: <img src="./images/office.png" height={600} widt={800} />,
      description: "Office Jobs",
    },
    {
      image: <img src="./images/tutoring.png" height={600} width={800} />,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      {props.item.image}
      <p>{props.item.description}</p>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default MyCarousel;
