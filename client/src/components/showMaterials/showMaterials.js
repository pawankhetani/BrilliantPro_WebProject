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

export default function ShowMaterial() {
  const [materialList, setMaterialList] = useState([])

  const deleteMaterial = (id) => {
      axios.delete('http://localhost:5000/materials/'+id).then( () => {
          window.location.reload(false);
      })
  }

  useEffect(() =>{
        axios.get('http://localhost:5000/materials').then( (allMaterials) => {
        setMaterialList(allMaterials.data);
      })
  }, [])

  return (
    <>
    <h2>All Material</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Material ID</TableCell>
            <TableCell align="right">Material Name</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {materialList.map((material, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {material.materialID}
              </TableCell>
              <TableCell align="right">{material.materialName}</TableCell>
              <TableCell align="right">
                  <IconButton aria-label="delete" variant="outlined" onClick={() => deleteMaterial(material._id)}>
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
        count={materialList.length}
      />
    </>
  );
}
