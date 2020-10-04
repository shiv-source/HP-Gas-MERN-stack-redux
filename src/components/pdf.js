import React, { useState,useEffect } from 'react'  
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';  
import jsPDF from 'jspdf'; 
import Button from '@material-ui/core/Button';
import html2canvas from 'html2canvas'; 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from "../assests/download.png";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 800,
    },
    head:{
        width:'100%',
     textAlign:'right',
      borderBottom: '2px solid #000', 
      lineHeight:'0.1em', 
       margin:'10px 0 20px',
       paddingRight: '35px'
    },
    table :{
        border: '1px solid black',
        borderCollapse: 'collapse'
      },
    span:{
        background:'#fff', 
        padding:'0 10px',
    }
   
  }));
export default function Pdf() {
    const classes = useStyles();
    const [cname,setCname]=useState('')
    const [cmob,setCmobile]=useState('')
    const [caddress,setCaddress]=useState('')
    const [phone,setPhone]=useState('')
// Create styles
useEffect(()=>{
handleValues()

},[])

const handleValues = ()=>{
 let cdetails = JSON.parse(localStorage.getItem('customer_detail')) 
 console.log('details',cdetails)
 setCname(cdetails.name)
 setCmobile(cdetails.mob)
 setCaddress(cdetails.add)
 setPhone(cdetails.phone)
}
const printDocument =() =>{  
    const input = document.getElementById('pdfdiv');  
    html2canvas(input)  
      .then((canvas) => {  
        var imgWidth = 200;  
        var pageHeight = 290;  
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
        const imgData = canvas.toDataURL('image/png');  
        const pdf = new jsPDF('p', 'mm', 'a4')  
        var position = 0;  
        var heightLeft = imgHeight;  
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
        pdf.save("download.pdf"); 
      });  

  }  
  
return (
    <div className={classes.root}>
    <Paper className={classes.paper}  id="pdfdiv">
      <Grid container spacing={2}>
      <Grid container spacing={3}>
        <Grid item>
          <h2>Bill-Invoice</h2>
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
              <Typography variant="subtitle1" >
              MO:-{phone}
              </Typography>
              <h3 className={classes.head}><span className={classes.span}>Bill-Invoice</span></h3>
          </Grid>
          <br></br>
          <h2><u>Bill to</u></h2>
          <br></br>
          <table className={classes.table} style={{width:'100%'}}>
  <tr>
    <th style={{textAlign:'left'}}>{cname}</th>
    <th>Customer Info</th>
  </tr>
  <tr>
    <td>Address:{caddress}</td>
    <td></td>
  </tr>
  <tr>
    <td>Phone:{cmob}</td>
    <td></td>
  </tr>
   </table>
   <br></br>
 </Grid>
     </Grid>
         <Grid item>
            <img src={Logo} alt="website logo" style={{height:'120px'}}/>
            </Grid>
         <TableContainer className="txt" component={Paper}>  
          <Table stickyHeader aria-label="sticky table"> 
        
            <TableHead>  
              <TableRow>  
                <TableCell align="left">Date</TableCell>  
                <TableCell >Item Description</TableCell>  
                <TableCell>Unit Price(RS)</TableCell>  
                <TableCell align="right">Qty</TableCell>  
                <TableCell align="right">Total</TableCell>  
                <TableCell align="right">Tax %</TableCell>  
                <TableCell >Tax Amount(Rs)</TableCell> 
                <TableCell >Total</TableCell> 
              </TableRow>  
            </TableHead>  
            {/* <TableBody>  
              {  
                this.state.ProductData.map((p, index) => {  
                  return <TableRow key={index}>  
                    <TableCell component="th" scope="row">  
                      {p.Id}  
                    </TableCell>  
                    <TableCell align="right">hello</TableCell>  
                    <TableCell align="right">{p.Age}</TableCell>  
                    <TableCell align="right">{p.Address}</TableCell>  
                    <TableCell align="right">{p.City}</TableCell>  
                    <TableCell align="right">{p.ContactNum}</TableCell>  
                    <TableCell align="right">{p.Salary}</TableCell>  
                    <TableCell style={{ paddingRight: "114px" }} align="right">{p.Department}</TableCell>  
                  </TableRow>  
                })  
              }  
            </TableBody>   */}
          </Table><br></br>  
         
        </TableContainer> 
        </Grid>
        </Paper> 
        <Button onClick={printDocument} variant="contained" color="primary">  
            Generate Pdf  
        </Button> 
      </div>  
      );

}