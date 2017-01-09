import React from 'react';
import ReactDOM from 'react-dom';
import {
  browserHistory,
  IndexRoute,
  Route,
  Router
  } from 'react-router';

// Routes
import App from './App';
import ContactUs from './routes/ContactUs';
import Home from './routes/Home';
import HowWeDoIt from './routes/HowWeDoIt';

import './styles/index.scss';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/how-we-do-it' component={HowWeDoIt} />
      <Route path='/contact-us' component={ContactUs} />
    </Route>
  </Router>),
  document.getElementById('root')
);
