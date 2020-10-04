import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Vendors from './vendors';
import Items from './items';
import {useHistory} from 'react-router-dom';
import Sidebar from './sidebar';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
  
    marginRight:' 70px',
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 300,
  },
 
  title: {
    flexGrow: 1,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const history = useHistory()
const handleLogout = ()=>{
history.push('/')
}
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            HP Bill Invoice
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Mukesh(Logout)</Button>
        </Toolbar>
      </AppBar>
    
      <br></br>
     
           <Grid item xs={2} sm container>
           <Grid items xs={10}>  <Vendors/> </Grid>
           <Grid items xs={2}> <Sidebar/> </Grid>
          
          
            <Grid item xs container direction="column" spacing={2}>
        
          
    
      </Grid></Grid>
      
      
      <br></br>  <br></br>
      <Items/>
       
  
</div>
    
  );
}