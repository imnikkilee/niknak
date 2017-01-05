import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

// Routes
import Home from './routes/Home';
import Process from './routes/Process';

import './styles/index.scss';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Home}/>
    <Route path='/how-we-do-it' component={Process}/>
  </Router>),
  document.getElementById('root')
);
