import { useState } from 'react';
import { InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@mui/material';

const Category = ({ category, setCategory }) => {

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: 1 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
          label="Category *"
          onChange={handleCategoryChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='HIIT'>HIIT</MenuItem>
          <MenuItem value='Yoga'>Yoga</MenuItem>
          <MenuItem value='Pilates'>Pilates</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}

export default Category;