import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Friends from './components/Friends';
import ForgotPassword from './components/ForgotPassword';
import Addresses from './components/Addresses';
import TopNav from './sharedComponents/TopNav';
import Friend from './sharedComponents/Friend';
import ProvideAuth from './helpers/ProvideAuth';
import PrivateRoute from './helpers/PrivateRoute';
import { generateFriends } from './helpers/GenerateData';
import { generateAddresses } from './helpers/GenerateData';

import ls from 'local-storage';

import './App.css';

ls.set('isAuthenticated', false);

const App = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(
    ls.get('isAuthenticated')
  );
  useEffect(() => {
    const friends = generateFriends().data;
    const addresses = generateAddresses().data;
    ls.set('friends', friends);
    ls.set('addresses', addresses);
  });

  const handleAuth = () => {
    setUserAuthenticated(!userAuthenticated);
  };

  return (
    <ProvideAuth>
      <Router>
        {userAuthenticated && <TopNav handleAuth={handleAuth} />}
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login handleAuth={handleAuth} />
            </Route>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <Route path="/forgotPassword">
              <ForgotPassword />
            </Route>
            <PrivateRoute exact path="/friends">
              <Friends />
            </PrivateRoute>
            <Route exact path="/friends/:id">
              <Friend />
            </Route>
            <PrivateRoute path="/addresses">
              <Addresses />
            </PrivateRoute>
            <Route path="*">
              {userAuthenticated ? (
                <Home />
              ) : (
                <Login unvalidAdd handleAuth={handleAuth} />
              )}
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
};

export default App;
