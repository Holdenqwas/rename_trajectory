import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import usePromise from 'react-use-promise';
import proxyRms from './proxyRms';

export const SelectName = () => {
  const [name, setName] = React.useState('');

  const [response, error] = usePromise(
    () => proxyRms.uipy.get_trj(),[]
  );

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 230 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Исходная траектория</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={name}
          data-rms-stored
          name="trj_name"
          onChange={handleChange}
          autoWidth
          label="Исходная траектория"
        >
          {response.map((name) => {
            return (
              <MenuItem value={name}>{name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  );
}