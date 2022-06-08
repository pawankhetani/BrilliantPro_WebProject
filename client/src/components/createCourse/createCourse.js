import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function CreateCourse() {
    const [course, setCourse] = useState({
        courseID: '',
        courseName: ''
    });

    const createCourse = () => {
        axios.post('http://localhost:5000/courses', course).then( () => {
            window.location.reload(false);
        })
    }
    return (
    <>
    <h2>Add Course</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Course ID" variant="outlined" value={course.courseID} onChange={(event) => {
          setCourse({...course, courseID: event.target.value})}} />
      <TextField id="outlined-basic" label="Course Name" variant="outlined" value={course.courseName} onChange={(event) => {
          setCourse({...course, courseName: event.target.value})}} />
      <Button variant="contained" onClick={createCourse}>
          Add
      </Button>
    </Box>
    </> 
  );
}
