import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { PDFViewer } from '@react-pdf/renderer';
import Pdf from './pdf'
 
// Create styles

 
// Create Document Component

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 300,
  },
 
}));

export default function Sidebar() {
  const classes = useStyles();

const history = useHistory()
const handleDownload = ()=>{
 
    history.push('/pdf')
}
const handleReset = ()=>{
alert('reset')
}
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        
        <Grid item>
        <Button
           type="submit"
           fullWidth
           variant="contained"
           color="primary"
          // onClick={handleSubmit}
        >
      Open PDF
        </Button>
        </Grid>
        <br></br>
        <Grid item>
        <Button
           type="submit"
           fullWidth
           variant="contained"
           color="primary"
          onClick={handleDownload}
        >
       Download PDF
        </Button>
        </Grid>
        <br></br>
        <Grid item>
        <Button
           type="submit"
           fullWidth
           variant="contained"
           color="primary"
          // onClick={handleSubmit}
        >
          Print PDF
        </Button>
        </Grid>
        <br></br>
        <Grid item>
        <Button
           type="submit"
           fullWidth
           variant="contained"
           color="primary"
          onClick={handleReset}
        >
        Reset
        </Button>
        </Grid>
       
        </Paper>
    </div>
  );
}