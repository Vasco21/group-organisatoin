import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutTeam from '../../sections/About/AboutTeam';


export default function SubNav(props) {
    return (
        <Router>
        <Switch>
           <Route exact path="#aboutTeam" component={AboutTeam}/>.
        </Switch>
      </Router>
    );
  }