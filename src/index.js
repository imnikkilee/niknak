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
import ErrorPage from './routes/ErrorPage';
import Home from './routes/Home';
import HowWeDoIt from './routes/HowWeDoIt';

import './styles/index.scss';

ReactDOM.render((
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/how-we-do-it' component={HowWeDoIt} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='*' component={ErrorPage} />
    </Route>
  </Router>),
  document.getElementById('root')
);
