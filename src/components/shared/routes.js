import React from "react";
import {  Switch,Route } from "react-router-dom";
// import Election from '../components/elections/Elections'
// import Voters from '../components/voters/Voters'
import Home from '../home/home'
import Main from '../main/main'
import About from '../about/About'

const Routes = () => (
  
  <Switch>
   <Route exact path="/" component={Home}/>
    <Route exact path="/main" component={ Main } />
    <Route exact path="/about" component={About} />
  </Switch>
);


export default Routes;