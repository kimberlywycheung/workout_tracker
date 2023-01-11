import { TextField, Button, Container } from '@mui/material';
import styled from '@emotion/styled'

// const AddBar = styled.div`
//   align: left;
//   height: 195;
// `

const Add = () => {
  return (
    <Container>
      <TextField id="outlined-basic" label="Insert URL.." variant="outlined" />
      <Button variant="contained">Add</Button>
    </Container>
  );
};

export default Add;