import * as React from 'react';
import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, ImageList, ImageListItem }from '@mui/material';
import Card from './Card.jsx';

const List = ({ workouts }) => {

  if (!workouts) {
    return;
  }

  return (
    // <div>
    //   {
    //     workouts.map((workout) => {
    //       return <Card key={workout.id} workout={workout}></Card>
    //     })
    //   }
    // </div>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Workout</TableCell>
            <TableCell align="right">Watched</TableCell>
            <TableCell align="right">Avg Rating</TableCell>
            <TableCell align="right">Avg Difficulty</TableCell>
            <TableCell align="right">Video Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workouts.map((workout) => (
            <TableRow
              key={workout.url}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {workout.title}</TableCell>
              <TableCell align="right">{workout.count}</TableCell>
              <TableCell align="right">{workout.rating.slice(0, 4)}</TableCell>
              <TableCell align="right">{workout.difficulty.slice(0, 4)}</TableCell>
              <TableCell align="right">
                <ImageList sx={{ width: 80, height: 50 }} cols={1} rowHeight={50}>
                  <ImageListItem key={workout.thumbnail}>
                    <img src={`${workout.thumbnail}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${workout.thumbnail}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={workout.title}
                    loading="lazy"
                    />
                  </ImageListItem>
                </ImageList>
                <Link href={workout.url}>View Video</Link>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
