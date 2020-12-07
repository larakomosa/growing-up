import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Grid,
  Box,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

function PersonSelect(props) {
  const dispatch = useDispatch();
  const [personSelected, setPersonSelected] = useState('John');

  function handleChange(event) {
    setPersonSelected(event.target.value);
    dispatch({
      type: 'GET_ADMIN_ASSIGNED',
      payload: `${event.target.value.toUpperCase()}`,
    });
  }

  return (
    <Grid container justify="center">
      <Grid item xs={10}>
        <FormControl fullWidth size="small" variant="outlined">
          <InputLabel
            style={{ color: '#ff6e79', fontFamily: 'nunito' }}
            id="person-select-outlined-label"
          >
            <p />
            Child
          </InputLabel>
          <Select
            labelId="person-select-outlined-label"
            id="person-select-outlined"
            value={personSelected}
            onChange={handleChange}
            style={{ fontFamily: 'nunito', color: '698399' }}
            label="Person"
          >
            <MenuItem value="">
              <p>Select a Child</p>
            </MenuItem>
            <MenuItem value="15">
              <p>Gabriel Robert Komosa</p>
            </MenuItem>
            <MenuItem value="14">
              <p>Oliver James Komosa</p>
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={8}>
        <Box mb={2} mt={2}></Box>
      </Grid>
    </Grid>
  );
}

export default PersonSelect;
