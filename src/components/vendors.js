import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import Logo from "../assests/download.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginRight:' 350px',
   
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginLeft: '76px',
    maxWidth: 700,
  },
 
}));

export default function Vendors() {
  const classes = useStyles();
  const [phone,setPhone] = useState('9546081633, 8271608018')
  const [cname,setCname] = useState('')
  const [cmobile,setCmobile] = useState('')
  const [caddress,setCaddress] = useState('')
  let detail ={
      name:cname,mob:cmobile,add:caddress,phone:phone
  }
  localStorage.setItem('customer_detail',JSON.stringify(detail))

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
        <Grid container spacing={3}>
          <Grid item>
            <h2>Vendor Detail</h2>
          </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                RAJNANDANI HP GAS GRAMIN VITRAK

                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                VILL:- MAINARAHIKA BAJITPUR
                </Typography>
                <Typography variant="subtitle1" >
                PS:- MANIGACHHI
                </Typography>
                <Typography variant="subtitle1">
                DIST:- DARBHANGA (847422)
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" >
                Phone number
                </Typography>
                <TextField
            variant="outlined"
            margin="normal"
            name="phone"
           type="text"
            id="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
              </Grid>
            </Grid>
            <Grid item>
            <img src={Logo} alt="website logo" style={{height:'120px'}}/>
            </Grid>
          </Grid>
          
            {/* <Grid item>
            <img src={Logo} alt="website logo" style={{height:'120px'}}/>
            </Grid> */}
          </Grid>
      </Paper>
      <br></br>
      <Paper className={classes.paper}>
      <Grid container spacing={3}>
          <Grid item>
            <h2>Customer Info (Bill To)</h2>
          </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs ={12} container direction="column" spacing={2}>
              <Grid item xs={6} >
                <Typography variant="body2">
               customer Name

                </Typography>
                <TextField
            variant="outlined"
            name="cname"
            id="cname"
             value={cname}
            onChange={(e)=>setCname(e.target.value)}
          />
           <Typography variant="body2">
              Mobile

                </Typography>
                <TextField
            variant="outlined"
            name="mobile"
            id="mobile"
            value={cmobile}
             onChange={(e)=>setCmobile(e.target.value)}
          />
          
          </Grid>
          <Grid item xs={6} >
               <Typography variant="body2">
              Address
            </Typography>
            <TextField
                id="outlined-multiline-static"
                multiline
                fullWidth
                rows={5}
                value={caddress}
                variant="outlined"
             onChange={(e)=>setCaddress(e.target.value)}
           />
          </Grid>
               
              </Grid>
            </Grid>
            </Paper>
    </div>
  );
}