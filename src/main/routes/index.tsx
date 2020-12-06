import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeDashBoard } from './../factories/pages'
import Register from '../../presentation/pages/Register';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={makeDashBoard} />
    <Route path="/register" component={Register} />
  </Switch>
);

export default Routes;