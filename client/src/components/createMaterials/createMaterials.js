import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function CreateMaterial() {
    const [material, setMaterial] = useState({
        materialID: '',
        materialName: ''
    });

    const createMaterial = () => {
        axios.post('http://localhost:5000/materials', material).then( () => {
            window.location.reload(false);
        })
    }
    return (
    <>
    <h2>Add Material</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Material ID" variant="outlined" value={material.materialID} onChange={(event) => {
          setMaterial({...material, materialID: event.target.value})}} />
      <TextField id="outlined-basic" label="Material Name" variant="outlined" value={material.materialName} onChange={(event) => {
          setMaterial({...material, materialName: event.target.value})}} />
      <Button variant="contained" onClick={createMaterial}>
          Add
      </Button>
    </Box>
    </> 
  );
}
