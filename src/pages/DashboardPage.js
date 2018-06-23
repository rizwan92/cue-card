import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Dashboard from "../components/dashboard";
import UserPage from "../components/dashboard/User";
import CardPage from "../components/dashboard/Card";
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
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
              <label
                className="mdl-button mdl-js-button mdl-button--icon"
                htmlFor="search"
              >
                <i className="material-icons">search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <input
                  className="mdl-textfield__input"
                  type="text"
                  id="search"
                  onChange={e => {
                    this.setState({ search: e.target.value });
                  }}
                />
                <label className="mdl-textfield__label" htmlFor="search">
                  Enter your query...
                </label>
              </div>
            </div>
            <button
              id="myheader1"
              className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
            >
              <i className="material-icons">more_vert</i>
            </button>
            <ul
              className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right"
              htmlFor="hdrbtn1"
            >
              <li className="mdl-menu__item" onClick={() => {}}>
                Reload
              </li>
              <li className="mdl-menu__item">Contact</li>
              <li
                className="mdl-menu__item"
                onClick={() => console.log("logout")}
              >
                Logout
              </li>
            </ul>
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
              <ul
                className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                htmlFor="accbtn1"
              >
                <li className="mdl-menu__item">name:-MD Rizwan chouhan</li>
                <li className="mdl-menu__item">contact:-9827866360</li>
                <li className="mdl-menu__item">password:-password</li>
                <li className="mdl-menu__item">
                  <i className="material-icons">add</i>Add another account...
                </li>
              </ul>
            </div>
          </header>
          <nav className="demo-navigation mdl-navigation mdl-color--black-grey-800">
            <NavLink className="mdl-navigation__link" to="/dashboard">
              <i
                className="mdl-color-text--blue-grey-400 material-icons"
                role="presentation"
              >
                home
              </i>Home
            </NavLink>
            <NavLink className="mdl-navigation__link" to="/dashboard/user">
              <i
                className="mdl-color-text--blue-grey-400 material-icons"
                role="presentation"
              >
                local_offer
              </i>Users
            </NavLink>
            <NavLink className="mdl-navigation__link" to="/dashboard/card">
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
            path="/dashboard"
            render={props => (
              <Dashboard {...props} search={this.state.search} />
            )}
          />
          <Route
            exact
            path="/dashboard/home"
            render={props => (
              <Dashboard {...props} search={this.state.search} />
            )}
          />
          <Route
            exact
            path="/dashboard/user"
            render={props => <UserPage {...props} search={this.state.search} />}
          />
          <Route
            exact
            path="/dashboard/card"
            render={props => <CardPage {...props} search={this.state.search} />}
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
