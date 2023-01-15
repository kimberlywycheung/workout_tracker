import * as React from 'react';
import Image from 'next/image'
import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, ImageList, ImageListItem }from '@mui/material';

import Card from './Card.jsx';

const List = ({ workouts }) => {

  if (!workouts) {
    return;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Workout</TableCell>
            <TableCell align="center">Watched</TableCell>
            <TableCell align="center">Avg Rating</TableCell>
            <TableCell align="center">Avg Difficulty</TableCell>
            <TableCell align="center">Video Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workouts.map((workout) => (
            <TableRow
              key={workout.url}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {workout.title}</TableCell>
              <TableCell align="center">{workout.count}</TableCell>
              <TableCell align="center">{workout.rating.slice(0, 4)}</TableCell>
              <TableCell align="center">{workout.difficulty.slice(0, 4)}</TableCell>
              <TableCell align="center">
                <ImageList sx={{ width: 80, height: 50 }} cols={1} rowHeight={50}>
                  <ImageListItem key={workout.thumbnail}>
                    <img
                      src={`${workout.thumbnail}?w=164&h=164&fit=crop&auto=format`}
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
