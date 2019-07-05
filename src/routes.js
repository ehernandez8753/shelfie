import React from "react";
import {Switch, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

export default(
    <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/about" component={About}/>
        <Route path="/classlist/:class" component={ClassList}/>
        <Route path="/student/:id" component={Student}/>
    </Switch>
);