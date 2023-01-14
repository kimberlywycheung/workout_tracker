import { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Button, TextField, Typography, Rating, FormControl,
  InputLabel, Select, MenuItem, FormHelperText, InputAdornment, Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

import Tags from './Tags.jsx';
import Category from './Category.jsx';

let data = {
  date: null,
  title: '',
  channel: '',
  thumbnail: '',
  minutes: 0,
  rating: 0,
  difficulty: 0,
  category: '',
  notes: '',
  tags: []
};

const Form = ({ url, setUrl, formData, setSnackbar }) => {
  const [title, setTitle] = useState('');
  const [channel, setChannel] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [tags, setTags] = useState([]);

  useEffect (() => {
    if (formData) {
      data.date = new Date().toLocaleDateString();
      data.title = formData.title;
      data.channel = formData.channel;
      data.thumbnail = formData.thumbnail;
    }
  }, [formData]);

  useEffect(() => {
    if (category) {
      handleChange(null, 'category', category);
    }
  }, [category])

  const handleChange = (e, field, newValue) => {
    if (!newValue) {
      data[field] = e.target.value;
    } else {
      data[field] = newValue;
    }
  };

  const saveForm = (e) => {
    e.preventDefault();
    postWorkout({ url: url, data: data });
    clearURL(null);
    setSnackbar(true)
  }

  const clearURL = (e) => {
    if (e) {
      e.preventDefault();
    }
    setUrl(null);
    clearForm();
  };

  if (!formData) {
    return;
  }

  return (
    <>
      <Container>
        <Grid2 container spacing={2}>
          {/* Date */}
          <Grid2 xs={2}>
            <TextField
                label="Date*"
                id="outlined-helperText"
                defaultValue={new Date().toLocaleDateString()}
                sx={{ width: 1 }}
                helperText="Required"
                onChange={(e) => setDate(e.target.value)}
              />
          </Grid2>

          {/* URL */}
          <Grid2 xs={10} >
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
              defaultValue={formData.title}
              helperText="Required"
              onChange={(e) => handleChange(e, 'title')}
        />
          </Grid2>

           {/* Channel */}
           <Grid2 xs={4}>
            <TextField
              sx={{ width: 1 }}
              id="outlined-helperText"
              label="Channel"
              defaultValue={formData.channel}
              helperText="Required"
              onChange={(e) => handleChange(e, 'channel')}
            />
          </Grid2>

          {/* Category */}
          <Grid2 xs={3}>
            <Category category={category} setCategory={setCategory} handleChange={handleChange}></Category>
          </Grid2>

          {/* Length of Workout */}
          <Grid2 xs={4.5}>
            <TextField
                label="Length of Workout"
                id="outlined-start-adornment"
                sx={{ width: 0.8 }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">min</InputAdornment>,
                }}
                helperText="Required"
                onChange={(e) => handleChange(e, 'length')}
              />
          </Grid2>

          {/* Difficulty */}
          <Grid2 xs={2.5}>
            <Typography component="legend">Difficulty</Typography>
            <Rating
              name="simple-controlled"
              value={difficulty}
              onChange={(e, newValue) => {
                setDifficulty(newValue);
                handleChange(e, 'difficulty', newValue);
              }}
            />
          </Grid2>

          {/* Rating */}
          <Grid2 xs={2}>
            <Typography component="legend">Rating</Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(e, newValue) => {
                setRating(newValue);
                handleChange(e, 'rating', newValue);
              }}
            />
          </Grid2>

          {/* Tags */}
          <Grid2 xs={12}>
            {/* <Tags url={url}></Tags> */}
          </Grid2>

          {/* Notes */}
          <Grid2 xs={12}>
            <TextField
              sx={{ width: 1 }}
              id="outlined-multiline-static"
              label="Notes"
              multiline rows={4}
              onChange={(e) => handleChange(e, 'notes')}
            />
          </Grid2>

        </Grid2>

      </Container>

      {/* Action buttons */}
      <Stack direction="row" spacing={2}>
        <Button xs={{m: 2, p: 4}} variant="contained" onClick={saveForm}>
          Save
        </Button>
        <Button xs={{m: 2, p: 4}} variant="outlined" onClick={clearURL}>
          Cancel
        </Button>
      </Stack>
    </>
  );
};

// post to table
const postWorkout = (formData) => {
  axios.post("/api/workouts/:username", formData)
    .catch(err => console.log(err));
};

// HELPER FUNCTIONS
const clearForm = () => {
  data.date = null,
  data.title = '',
  data.channel = '',
  data.thumbnail = '',
  data.minutes = 0,
  data.rating = 0,
  data.difficulty = 0,
  data.category = '',
  data.notes = '',
  data.tags = []
}

export default Form;