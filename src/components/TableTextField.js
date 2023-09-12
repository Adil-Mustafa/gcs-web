import React,{useState,useEffect} from 'react'
import {
    Grid,
    Paper,
    Box,
    Typography,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
function TableTextField({title}) {
  return (
    <div style={{display:"flex"}}>

    <Typography>

   {title}
    </Typography>
  
  <TextField variant="standard" />
    </div>
  )
}

export default TableTextField