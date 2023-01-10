import { TextField, Button, Container } from '@mui/material';
import styled from '@emotion/styled'

// const AddBar = styled.div`
//   align: left;
//   height: 195;
// `

export default function Search() {
  return (
    <Container>
      <TextField id="outlined-basic" label="Insert URL.." variant="outlined" />
      <Button variant="contained">Add</Button>
    </Container>
  );
}


