import { TextField, Button, Container, FormControl } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import styled from '@emotion/styled';

const scrape = require('../scraper.js');

const Add = ({ setUrl, setFormData }) => {
  // handle URL submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const url = document.getElementById('outlined-basic url').value;

    if (url.length > 0) {
      setUrl(url);

      scrape(url, ({ data }) => {
        setFormData({
          channel: data.author_name,
          title: data.title,
          thumbnail: data.thumbnail_url,
        });
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid2 container spacing={2}>
        <Grid2 xs={11}>
          <TextField
            sx={{ width: 1 }}
            id="outlined-basic url"
            label="URL"
            variant="outlined"
          />
        </Grid2>
        <Grid2 xs={1}>
          <Button
            variant="contained"
            onClick={handleSubmit}
          >Add</Button>
        </Grid2>
      </Grid2>
      {/* <p>https://www.youtube.com/watch?v=giSo0qQIscE&ab_channel=YogaWithAdriene</p>
      <p>https://www.youtube.com/watch?v=sKyYyeFl6lo&ab_channel=CarolineGirvan</p> */}
    </Container>
  );
};

export default Add;