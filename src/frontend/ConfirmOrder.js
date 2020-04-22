import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import PizzaAppBar from './AppBar'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Link} from "react-router-dom";
export default class ConfirmOrder extends Component {
    render() {
        if(document.cookie == undefined || document.cookie == "") {
            return (
                <div style={{padding: "24px"}}>
                    <Typography variant="h3">Only authorized users can access this page. If you logged out before confirming your order, you will need to make a new order <Link to="/">here</Link></Typography>
                </div>
            )
        }
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        const username = ca[0].substring("username=".length, ca[0].length)
        console.log(this.props.location.state)
        const rows = this.props.location.state.order
        return (
            <div> 
              <PizzaAppBar />
              <Grid container style={{marginTop: "24px"}} spacing={3}>
              <Grid item xs={4} />
              <Grid item xs={4} >
              <Paper style={{textAlign: "left"}} elevation={5}>
                <Typography variant="h5">
                    Your order:
                </Typography>
                <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pizza name</TableCell>
            <TableCell align="right">Price</TableCell>            
            <TableCell align="right">Quantity</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.pizza.name}
              </TableCell>
              <TableCell align="right">{row.pizza.price + " HKD"}</TableCell>              
              <TableCell align="right">{row.qt}</TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <Typography variant="h6">Total to pay: {rows.reduce((sum, x) => (sum + x.pizza.price * x.qt), 0) + " HKD"}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4} />
              </Grid>
            </div>
        )
    }
}