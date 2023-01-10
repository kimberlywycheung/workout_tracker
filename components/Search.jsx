import { TextField, Button } from '@mui/material';

export default function Search() {
  return (
    <>
      <TextField id="outlined-basic" label="Insert URL.." variant="outlined" />
      <Button variant="contained">Add</Button>
    </>
  );
}


