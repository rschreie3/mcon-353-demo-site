import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TheCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx= {{height:140}}
        image = "./images/office.png"
        title = "office jobs" />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Check out our
          </Typography>
          <Typography variant="h5" component="div">
            Office Jobs
          </Typography>

          <Typography variant="body2">
            Connecting Employers to post-seminary girls
            <br />
            {'looking for office jobs'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }