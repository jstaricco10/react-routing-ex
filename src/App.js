import React from "react";
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

import "./App.css";

const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <TopNav />
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/forgotPassword">
              <ForgotPassword />
            </Route>
            <PrivateRoute path="/friends">
              <Friends />
            </PrivateRoute>
            <PrivateRoute path="/addresses">
              <Addresses />
            </PrivateRoute>
            <Route path="*">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
};

export default App;
