import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Dashboard from "../components/dashboard";
import UserPage from "../components/dashboard/User";
import CardPage from "../components/dashboard/Card";
import AddCard from "../components/dashboard/AddCard";
import AddUser from "../components/dashboard/AddUser";
export class DashboardPage extends Component {
  state = {
    search: ""
  };

  // componentDidMount() {
  //   window.componentHandler.upgradeDom();
  // }
  // componentDidUpdate() {
  //   window.componentHandler.upgradeDom();
  // }

  render() {
    return (
      <div
        className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header"
        style={{ height: "100vh" }}
      >
        <header className="demo-header mdl-layout__header mdl-color--teal-300 mdl-color-text--black-600">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Home</span>
            <div className="mdl-layout-spacer" />
          </div>
        </header>
        <div className="demo-drawer mdl-layout__drawer mdl-color--white-grey-900 mdl-color-text--black-grey-50">
          <header className="demo-drawer-header mdl-color--teal-300 mdl-color-text--black-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zOF8VxM6oNgGrfW1832Wpq-gRpuXUvGorYwpjXwUoBmz2MNV"
              className="demo-avatar"
              alt="something"
            />
            <div className="demo-avatar-dropdown">
              <span>chouhan.rizwan@gmail.com</span>
              <div className="mdl-layout-spacer" />
              <button
                id="accbtn1"
                className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
              >
                <i className="material-icons" role="presentation">
                  arrow_drop_down
                </i>
                <span className="visuallyhidden">Accounts</span>
              </button>
            </div>
          </header>
          <nav className="demo-navigation mdl-navigation mdl-color--black-grey-800">
            <NavLink className="mdl-navigation__link" to="/admin">
              <i
                className="mdl-color-text--blue-grey-400 material-icons"
                role="presentation"
              >
                home
              </i>Home
            </NavLink>
            <NavLink className="mdl-navigation__link" to="/admin/user">
              <i
                className="mdl-color-text--blue-grey-400 material-icons"
                role="presentation"
              >
                local_offer
              </i>Users
            </NavLink>
            <NavLink className="mdl-navigation__link" to="/admin/card">
              <i
                className="mdl-color-text--blue-grey-400 material-icons"
                role="presentation"
              >
                inbox
              </i>Card
            </NavLink>

            <div className="mdl-layout-spacer" />
            <NavLink className="mdl-navigation__link" to="">
              <i
                className="mdl-color-text--blue-grey-400 material-icons"
                role="presentation"
              >
                help_outline
              </i>
              <span className="visuallyhidden">Help</span>
            </NavLink>
          </nav>
        </div>

        <main className="mdl-layout__content">
          <Route
            exact
            path="/admin"
            render={props => (
              <Dashboard {...props} search={this.state.search} />
            )}
          />
          <Route
            exact
            path="/admin/home"
            render={props => (
              <Dashboard {...props} search={this.state.search} />
            )}
          />
          <Route
            exact
            path="/admin/user"
            render={props => <UserPage {...props} search={this.state.search} />}
          />
          <Route
            exact
            path="/admin/adduser"
            render={props => <AddUser {...props} search={this.state.search} />}
          />
          <Route
            exact
            path="/admin/card"
            render={props => <CardPage {...props} search={this.state.search} />}
          />
          <Route
            exact
            path="/admin/addcard"
            render={props => <AddCard {...props} search={this.state.search} />}
          />
        </main>

        <div id="demo-toast-example" className="mdl-js-snackbar mdl-snackbar">
          <div className="mdl-snackbar__text" />
          <button className="mdl-snackbar__action" type="button" />
        </div>
      </div>
    );
  }
}

export default DashboardPage;
