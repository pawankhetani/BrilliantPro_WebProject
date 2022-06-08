import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Create() {
    const [student, setStudent] = useState({
        regNo: 0,
        studentName: '',
        grade: '',
        section: ''
    });

    const createStudentt = () => {
        axios.post('http://localhost:5000/students', student).then( () => {
            window.location.reload(false);
        })
    }
    return (
    <>
    <h2>Add Student</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Registeration No." variant="outlined" value={student.regNo} onChange={(event) => {
          setStudent({...student, regNo: event.target.value})}} />
      <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event) => {
          setStudent({...student, studentName: event.target.value})}}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event) => {
          setStudent({...student, grade: event.target.value})}}/>
      <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section} onChange={(event) => {
          setStudent({...student, section: event.target.value})}}/>
      <Button variant="contained" onClick={createStudentt}>
          Add
      </Button>
    </Box>
    </> 
  );
}
