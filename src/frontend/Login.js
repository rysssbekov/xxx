import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

export default class Login extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event, type) {
        this.setState({[type]: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();         
        const data = this.state
        console.log(data)
        fetch('/api/login', {
          method: 'POST',
          headers:{'content-type': 'application/json'},
          body: JSON.stringify(data),
        }).then(res => res.text())
        .then(res => console.log(res))
      }  
  render() {    
  return (
    <Grid container>
        <Grid item xs={4} />
        <Grid item xs={4} >
    <Paper elevation={5}>
    <form onSubmit={this.handleSubmit} action="http://localhost:8080/api/login" noValidate autoComplete="off" method="POST">
      <div>
        <Typography type="h4">Log in here</Typography>
        <TextField value={this.state.username} onChange={e => this.handleChange(e, "username")} required id="standard-required" label="Username"/>        
    </div>
    <div>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"        
          value={this.state.password}
          onChange={e => this.handleChange(e, "password")}
        />
        </div>
        <Button type="submit" variant="contained" color="primary" disableElevation>
            Log in
        </Button>
    </form>
    </Paper>
    </Grid>
    <Grid item xs={4} />
    </Grid>
  )
  }
}