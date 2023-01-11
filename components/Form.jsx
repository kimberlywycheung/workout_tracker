import { Container, Button, TextField, Typography, Rating, FormControl,
  InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Tags from './Tags.jsx';


const Form = ({ url, urlId, setUrl }) => {

  const value = 0;
  const channel = '';
  const handleChange = (e) => {

  };

  const clearURL = (e) => {
    e.preventDefault();
    setUrl(null);
  };

  return (
    <>
    <Grid2 container spacing={2}>
      {/* URL */}
      <Grid2 xs={8} md={8}>
        <TextField tag='url' id="standard-basic" label="URL" variant="standard" defaultValue={url}/>
      </Grid2>

      {/* Channel */}
      <Grid2 xs={8} md={8}>
        <TextField tag='channel' required id="standard-basic" label="Required" variant="standard" defaultValue="Channel"/>
      </Grid2>

      {/* Title */}
      <Grid2 xs={4} md={8}>
      <TextField tag='title' required id="standard-basic" variant="standard" label="Required" defaultValue="Title"/>
      </Grid2>

      {/* Category */}
      <Grid2 xs={8} md={8}>
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value='0'
            label="Category *"
            onChange={handleChange}
          >
            <MenuItem value=""> <em>None</em> </MenuItem>
            <MenuItem value='HIIT'>HIIT</MenuItem>
            <MenuItem value='Yoga'>Yoga</MenuItem>
            <MenuItem value='Pilates'>Pilates</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </Grid2>

      {/* Difficulty */}
      <Grid2 xs={4}  md={8}>
        <Typography component="legend">Difficulty</Typography>
        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Grid2>

      {/* Rating */}
      <Grid2 xs={4}  md={8}>
        <Typography component="legend">Rating</Typography>
        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Grid2>

      {/* Notes */}
      <Grid2 xs={4}  md={8}>
        <TextField id="outlined-textarea" label="Notes" placeholder="" multiline />
      </Grid2>

      {/* Tags */}
      <Grid2 xs={4}  md={8}>
        <Tags></Tags>
      </Grid2>

    </Grid2>

    <Container>

{/*
length of workout (min:sec)
channel/instructor varchar */}

    </Container>

    <Button variant="contained" onClick={clearURL} >Cancel</Button>
    <Button variant="contained" onClick={clearURL} >Add Another URL</Button>
    </>
  );
}

export default Form;