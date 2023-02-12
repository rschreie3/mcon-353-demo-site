import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Check out our
        </Typography>
        <Typography variant="h5" component="div">
          Babysitting
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          services
        </Typography>
        <Typography variant="body2">
          connecting parents in need to highschool aged girls
          <br />
          {"to babysit their children"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
