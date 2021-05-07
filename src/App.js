import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Friends from "./pages/Friends";
import ForgotPassword from "./pages/ForgotPassword";
import Addresses from "./pages/Addresses";
import TopNav from "./components/TopNav";
import Friend from "./components/Friend";
import ProvideAuth from "./helpers/ProvideAuth";
import PrivateRoute from "./helpers/PrivateRoute";

import { fakeAuth } from "./helpers/FakeAuth";

import ls from "local-storage";

import "./App.css";

ls.set("isAuthenticated", false);

const App = () => {
  const [userAutheticated, setUserAutheticated] = useState(
    ls.get("isAuthenticated")
  );
  const handleAuth = () => {
    setUserAutheticated(!userAutheticated);
  };

  return (
    <ProvideAuth>
      <Router>
        {userAutheticated ? <TopNav /> : ""}
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login handleAuth={handleAuth} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/forgotPassword">
              <ForgotPassword />
            </Route>
            <PrivateRoute exact path="/friends">
              <Friends />
            </PrivateRoute>
            <Route exact path="/friends/:id" component={Friend} />
            <PrivateRoute path="/addresses">
              <Addresses />
            </PrivateRoute>
            <Route path="*">
              <Login handleAuth={handleAuth} />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
};

export default App;
