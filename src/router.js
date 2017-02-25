import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './components/main';
import About from './components/about';
const Routes = () => {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
        </Route>
        <Route path="/about" component={About}>
        </Route>
      </Router>
    );
};

export default Routes;
