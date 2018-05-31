import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

export default (
<Switch>
    <Route exact path="/" Component={ Dashboard }/>
    <Route path="/wizard" Component={ Wizard }/>
</Switch>
)