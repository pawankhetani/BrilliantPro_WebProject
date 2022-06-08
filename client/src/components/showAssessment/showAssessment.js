import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import { TablePagination } from '@material-ui/core';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ShowAssessment() {
  const [assessmentList, setAssessmentList] = useState([])

  const deleteAssessment = (id) => {
      axios.delete('http://localhost:5000/assessments/'+id).then( () => {
          window.location.reload(false);
      })
  }

  useEffect(() =>{
        axios.get('http://localhost:5000/assessments').then( (allAssessments) => {
        setAssessmentList(allAssessments.data);
      })
  }, [])

  return (
    <>
    <h2>All Assessments</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Assessment No</TableCell>
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Marks</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assessmentList.map((assessment, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {assessment.assessmentNo}
              </TableCell>
              <TableCell align="right">{assessment.courseName}</TableCell>
              <TableCell align="right">{assessment.marks}</TableCell>
              <TableCell align="right">
                  <IconButton aria-label="delete" variant="outlined" onClick={() => deleteAssessment(assessment._id)}>
                      <DeleteIcon fontSize="small"/>
                  </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={assessmentList.length}
      />
    </>
  );
}
