import React, { Component } from "react";
import { withRouter } from "react-router-dom";
export class AdminLogin extends Component {
  render() {
    return (
      <div className="admin-login">
        <div className="demo-card-wide mdl-card mdl-shadow--2dp admin-login-box">
          <h4>Login</h4>
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield">
              <input
                className="mdl-textfield__input myinput"
                type="text"
                placeholder="Enter User Name"
              />
            </div>
            <br />
            <div className="mdl-textfield mdl-js-textfield">
              <input
                className="mdl-textfield__input myinput"
                type="text"
                placeholder="Enter Password"
              />
            </div>
            <br />
            <button
              onClick={() => this.props.history.push("/admin")}
              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminLogin);
