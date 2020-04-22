import React, { Component } from 'react';
import './app.css';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PizzaAppBar from './AppBar'
export default class Profile extends Component {    
    render() {
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        const username = ca[0].substring("username=".length, ca[0].length)
        return (
            <div> 
              <PizzaAppBar />
              <Grid container spacing={3}>
              <Grid item xs={4} />
              <Grid item xs={4} >
              <Paper elevation={5}>
                <Typography variant="h5">
                    Username
                </Typography>
                <Typography variant="h6">
                    {username}     
                </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4} />
              </Grid>
            </div>
        )
    }
}