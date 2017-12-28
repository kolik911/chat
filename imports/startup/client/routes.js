import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from '../../ui/App';
import Login from '../../ui/auth/Login';
import Registration from '../../ui/auth/Registration';


const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Login} />
      {/* <Route exact path="/registration" component={Registration} /> */}
      <Route exact path="/home" render={() => {
        if (Meteor.userId()) {
          return <App />;
        }
        return <Redirect to='/' />
      }}   />
    </div>
  </Router>
);