import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import AdminLogin from "./pages/AdminLogin";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cue-card" component={HomePage} />
          <Route exact path="/admin" component={DashboardPage} />
          <Route exact path="/admin/user" component={DashboardPage} />
          <Route exact path="/admin/adduser" component={DashboardPage} />
          <Route exact path="/admin/card" component={DashboardPage} />
          <Route exact path="/admin/addcard" component={DashboardPage} />
          <Route exact path="/adminlogin" component={AdminLogin} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
