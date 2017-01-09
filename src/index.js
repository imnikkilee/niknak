import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

// Routes
import Home from './routes/Home';
import HowWeDoIt from './routes/HowWeDoIt';

import './styles/index.scss';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Home}/>
    <Route path='/how-we-do-it' component={HowWeDoIt}/>
  </Router>),
  document.getElementById('root')
);
