import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuIcon from '@material-ui/icons/Menu';
import Items from './items'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
 
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
  },
 
 
}));

export default function AddItems(props) {
  const classes = useStyles();
  const {totalval}= props
const[newsection,setNewSection] = useState(false)
const[price,setPrice] = useState(0)
const[quantity,setQuantity] = useState(0)
const[tax,setTax] = useState(0)
const [total,setTotal]=useState([])

const totalAmount = ()=>{
    return (price)*(quantity)
}

const value =(total)=>
{  
    let data =[]
    if(localStorage.getItem("total"))
    {
        data = JSON.parse(localStorage.getItem("total"));
    }
    const val = total
   data.push(val)
   let uniqueChars = [...new Set(data)];
   localStorage.setItem("total",JSON.stringify(uniqueChars))   
   


}

const Total =()=>{
  
   let grandtot = totalAmount()+taxAmount()
   if(grandtot !=0){
       value(grandtot)
     }
   else{
    return grandtot
   }
   return grandtot
  
}
const taxAmount = ()=>{
    let taxs = tax*10
    return (taxs)*(quantity)
}
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
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
         <div>Sub. Total amount (Inc tax):{Total()}</div> 
            <br></br>
            </Grid>
          
          </Grid>
            
          </Grid>
          
      </Paper>
     
    </div>
    
  );
}