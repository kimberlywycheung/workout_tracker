
const names = [
  'full body',
  'pha training',
  'dumbbell cardio',
  'resistance training',
  '30 minutes',
  'hiit',
  'cardio',
  'home yoga'
];

import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Tag = () => {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
    </Stack>
  );
};

export default Tag;