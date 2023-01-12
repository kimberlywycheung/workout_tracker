import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

export default function Cards({ workout }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={workout.thumbnail}
        title={workout.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {workout.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {workout.category} <br/>
          Notes: {workout.notes} <br/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}