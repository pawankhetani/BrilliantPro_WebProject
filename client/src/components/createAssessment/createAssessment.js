import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function CreateAssessment() {
    const [assessment, setAssessment] = useState({
        assessmentID: '',
        assessmentName: ''
    });

    const createAssessment = () => {
        axios.post('http://localhost:5000/assessments', assessment).then( () => {
            window.location.reload(false);
        })
    }
    return (
    <>
    <h2>Add Assessment</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Assessment No" variant="outlined" value={assessment.assessmentNo} onChange={(event) => {
          setAssessment({...assessment, assessmentNo: event.target.value})}} />
      <TextField id="outlined-basic" label="Course Name" variant="outlined" value={assessment.courseName} onChange={(event) => {
          setAssessment({...assessment, courseName: event.target.value})}} />
      <TextField id="outlined-basic" label="Marks" variant="outlined" value={assessment.marks} onChange={(event) => {
          setAssessment({...assessment, marks: event.target.value})}} />
      <Button variant="contained" onClick={createAssessment}>
          Add
      </Button>
    </Box>
    </> 
  );
}
