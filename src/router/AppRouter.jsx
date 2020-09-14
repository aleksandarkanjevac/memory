import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Log from '../components/pages/Log/Log';
import List from '../components/pages/List/List';
import Board from '../components/pages/Board/Board';

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/log" component={Log} />
      <Route path="/list" component={List} />
      <Route path="/board" component={Board} />
    </Switch>
  );
}

export default AppRouter;
