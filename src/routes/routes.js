import React from "react";
import {  Switch,Route } from "react-router-dom";
// import Election from '../components/elections/Elections'
// import Voters from '../components/voters/Voters'
import Home from '../components/home/home'
import Main from '../components/main/main'
const Routes = () => (
  
  <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/main" component={Main}/>
  </Switch>
);


export default Routes;