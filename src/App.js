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
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={HomePage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/cue-card"}
            component={HomePage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/admin"}
            component={DashboardPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/admin/user"}
            component={DashboardPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/admin/adduser"}
            component={DashboardPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/admin/card"}
            component={DashboardPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/admin/addcard"}
            component={DashboardPage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/adminlogin"}
            component={AdminLogin}
          />
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
