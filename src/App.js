import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/dashboard/user" component={DashboardPage} />
          <Route exact path="/dashboard/adduser" component={DashboardPage} />
          <Route exact path="/dashboard/card" component={DashboardPage} />
          <Route exact path="/dashboard/addcard" component={DashboardPage} />
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
