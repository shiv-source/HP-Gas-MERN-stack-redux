import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuIcon from '@material-ui/icons/Menu';
import AddItems from './addItem'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginRight:' 350px'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
  },
 
 
}));

export default function Items(props) {
  const classes = useStyles();
  
const[newsection,setNewSection] = useState(true)
const[price,setPrice] = useState(0)
const[quantity,setQuantity] = useState(0)
const[tax,setTax] = useState(0)
const [state,setState]=useState([])
const newSection =()=>{
         if(newsection == true){
      
          let obj = [...state, <AddItems/> ]
           setState(obj)
           
    }else{
        return(
            <div></div>
        )
        }
}
const handleRemove = (item)=>{
  const list = state
  let popped = list.pop();
  setState( [list] );
}
const handleAddItem = (e)=>{
    newSection()
    
}
const totalAmount = ()=>{
    return (price)*(quantity)
}
const taxAmount = ()=>{
    let taxs = tax*10
    return (taxs)*(quantity)
}
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
        <Grid container spacing={3}>
          <Grid item>
            <h2>Items (Invoice items detail)</h2>
          </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography variant="body2" >
               Date
                </Typography>
                <TextField
                id="date"
                type="date"
                fullWidth
                variant="outlined"
  />
              </Grid>
              <Grid item>
                <Typography variant="body2" >
               Description
                </Typography>
                <TextField
            variant="outlined"
            name="Description"
            id="Description"
            // value={phone}
            // onChange={(e)=>setPhone(e.target.value)}
          />
              </Grid>
              <Grid item>
                <Typography variant="body2" >
               Unit Price
                </Typography>
                <TextField
            variant="outlined"
            name="Price"
            id="Price"
             value={price}
             onChange={(e)=>setPrice(e.target.value)}
          />
              </Grid>
              <Grid item>
                <Typography variant="body2" >
               Quantity
                </Typography>
                <TextField
            variant="outlined"
            name="Quantity"
            id="Quantity"
             value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}
          />
              </Grid>
              <Grid item>
                <Typography variant="body2" >
                  Tax
                </Typography>
                <TextField
            variant="outlined"
            name="Tax"
            id="Tax"
             value={tax}
             onChange={(e)=>setTax(e.target.value)}
          />
              </Grid>
              <div>Total amount:{totalAmount()}</div>
             <div>Tax amount:{taxAmount()}</div>
         <div>Sub. Total amount (Inc tax):{totalAmount()+taxAmount()}</div> 
            <br></br>
            {state}
             <hr />
             <h2>Total:Rs</h2>
            </Grid>
          
          </Grid>
       <Grid item>
            <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleAddItem}
          >
           Add Item
          </Button>
            </Grid>
            
          </Grid>
          <Grid item>
            <Button
            type="button"
            variant="contained"
            color="secondary"
             onClick={handleRemove}
          >
         Remove Item
          </Button>
            </Grid>
      </Paper>
      <br></br>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
        <Grid container spacing={3}>
          <Grid item>
          
            <h2><MenuIcon />Notes</h2>
          </Grid>
          <TextField
                multiline
                fullWidth
                rows={5}
                label="Notes"
                variant="outlined"
           />
          </Grid>
          </Grid>
          </Paper>
          <br></br>
    </div>
    
  );
}