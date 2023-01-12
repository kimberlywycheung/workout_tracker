import { Container, Button, TextField, Typography, Rating, FormControl,
  InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import Tags from './Tags.jsx';
import { useState, useEffect } from 'react';
const scrape = require('../scraper.js');

let form = {
  title: '',
  channel: '',
  thumbnail: '',
  rating: 0,
  difficulty: 0,
  category: '',
  notes: '',
  tags: []
};

const Form = ({ url, urlId, setUrl, formData }) => {
  const [title, setTitle] = useState('');
  const [channel, setChannel] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  let data = {
    title: '',
    channel: '',
    thumbnail: '',
    rating: 0,
    difficulty: 0,
    category: '',
    notes: '',
    tags: []
  }

  useEffect (() => {
    setTitle(formData.title);
    setChannel(formData.channel);
    setThumbnail(formData.thumbnail);
  }, [formData]);

  const handleChange = (e, field) => {
    data[field] = e.target.value;
    console.log(data[field]);
  };

  const saveForm = () => {

  }

  const clearURL = (e) => {
    e.preventDefault();
    setUrl(null);
  };

  return (
    <>
      <Container>
        <Grid2 container spacing={2}>
          {/* URL */}
          <Grid2 xs={12} >
            <TextField
              sx={{ width: 1 }}
              tag='url'
              id="outlined-read-only-input"
              label="URL"
              defaultValue={url}
              InputProps={{readOnly: true,}}
            />
          </Grid2>

          {/* Title */}
          <Grid2 xs={8}>
            <TextField
              sx={{ width: 1 }}
              id="outlined-helperText"
              label="Name of Workout"
              defaultValue={title}
              helperText="Required"
              onChange={(e) => handleChange(e, 'title')}
            />
          </Grid2>

          {/* Category */}
          <Grid2 xs={4}>
            <FormControl required sx={{ minWidth: 230 }}>
              <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
              <Select
                sx={{ width: 1 }}
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={data.category}
                label="Category *"
                onChange={(e) => handleChange(e, 'category')}
              >
                <MenuItem value=""> <em>None</em> </MenuItem>
                <MenuItem value='HIIT'>HIIT</MenuItem>
                <MenuItem value='Yoga'>Yoga</MenuItem>
                <MenuItem value='Pilates'>Pilates</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </Grid2>

          {/* Channel */}
          <Grid2 xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="outlined-helperText"
              label="Channel"
              defaultValue={channel}
              helperText="Required"
              onChange={(e) => handleChange(e, 'channel')}
            />
          </Grid2>

          {/* Length of Workout */}
          <Grid2 xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="outlined-helperText"
              label="Length"
              defaultValue=''
              helperText="Required"
              onChange={(e) => handleChange(e, 'length')}
            />
          </Grid2>

          {/* Difficulty */}
          <Grid2 xs={3}>
            <Typography component="legend">Difficulty</Typography>
            <Rating
              name="simple-controlled"
              value={data.difficulty}
              onChange={(e, newValue) => handleChange(e, 'difficulty')}
            />
          </Grid2>

          {/* Rating */}
          <Grid2 xs={8}>
            <Typography component="legend">Rating</Typography>
            <Rating
              name="simple-controlled"
              value={data.rating}
              onChange={(e, newValue) => handleChange(e, 'rating')}
            />
          </Grid2>

          {/* Notes */}
          <Grid2 xs={6}>
            <TextField
              sx={{ width: 1 }}
              id="outlined-multiline-static"
              label="Notes"
              multiline rows={4}
              onChange={(e) => handleChange(e, 'notes')}
            />
          </Grid2>

          {/* Tags */}
          <Grid2 xs={4}>
            <Tags></Tags>
          </Grid2>

        </Grid2>

      </Container>

      {/* Action buttons */}
      <Button xs={{m: 2, p: 4}} variant="contained" onClick={saveForm}>
        Save
      </Button>
      <Button xs={{m: 2, p: 4}} variant="contained" onClick={clearURL}>
        Cancel
      </Button>
    </>
  );
}

// post to table
const postWorkout = async (formData) => {
  axios.fetch("/api/workouts/:username", {
      method: "POST",
      body: formData,
    })
    .then(data => data.json());
};

  // static async getInitialProps(url) {
  //   const res = await fetch(url);
  //   const json = await res.json();
  //   return { stars: json.stargazers_count };
  // }

// Form.getInitialProps = async (url) => {
//   console.log('getting intiial props');
//   const res = await scrape(url);
//   const json = await res.json();
//   return { videoData: json };
// }

export default Form;