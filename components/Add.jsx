import { TextField, Button, Container, FormControl } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import styled from '@emotion/styled';

const Add = ({ setUrl, setUrlId }) => {

  // handle URL submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const url = document.getElementById('outlined-basic url').value;
    postURL(url)
      .then((data) => {
        setUrl(url);
        setUrlId(data);
       });
  };

  return (
    <Container maxWidth="sm">
      <Grid2 container spacing={2}>
        <Grid2 xs={8}>
          <TextField
            id="outlined-basic url"
            label="URL"
            variant="outlined"
          />
        </Grid2>
        <Grid2>
          <Button variant="contained" onClick={handleSubmit} >Add</Button>
        </Grid2>
      </Grid2>
    </Container>
  );
};

// post to URL table
const postURL = async (url) => {
  const response = await fetch("/api/workouts/:username", {
    method: "POST",
    body: url,
  });
  return response.json();
};

export default Add;