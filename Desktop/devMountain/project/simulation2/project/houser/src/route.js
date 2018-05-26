import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import React from 'react';
import step1 from './component/Wizard/step1';

export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/wizard/step1" component={step1} />
    </Switch>
)


