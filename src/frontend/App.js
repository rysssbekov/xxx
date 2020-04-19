import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import Order from './Order';
import SignUp from './SignUp';
import Login from './Login';
export default function App() {
    return(
        <Router>
      <div>                         
          <li>
            <Link to="/login">Log in</Link>
          </li>        
          <li>
            <Link to="/sign-up">Sign up</Link>
          </li>       
        <Switch>          
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
              <SignUp />
          </Route>
          <Route path="/">
            <Order />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}
