import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx= {{height:140}}
        image = "../home/images/tutoring.png"
        title = "tutoring" />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Check out our
          </Typography>
          <Typography variant="h5" component="div">
            Tutoring
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            services
          </Typography>
          <Typography variant="body2">
            connecting parents in need to highschool aged girls
            <br />
            {'to tutor their children'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
  