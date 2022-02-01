import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const ValidationTextFields = () => {
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
          label="Новая траектория"
          defaultValue=""
          helperText="Название не может быть пустым"
        />
      </div>
    </Box>
  );
}
