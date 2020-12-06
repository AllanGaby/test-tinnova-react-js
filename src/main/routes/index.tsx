import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeDashBoard, makeRegister } from './../factories/pages'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={makeRegister} />
    <Route path="/list" exact component={makeDashBoard} />    
    <Route path="/register" component={makeRegister} />
  </Switch>
);

export default Routes;