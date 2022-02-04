import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const ValidationTextFields = () => {
  const [term, setTerm] = useState('Drilled trajectory');

  const handleChange = (e) => {
    const term = e.target.value;
    setTerm(term); 
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-error-helper-text"
          data-rms-stored
          name="new_name"
          label="Новая траектория"
          value={term}
          onChange={handleChange}
          error={!Boolean(...term)}
          helperText={term ? "" : "Новое название не может быть пустым"}
        />
      </div>
    </Box>
  );
}
