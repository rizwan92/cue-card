import React, { Component } from "react";
import { withRouter } from "react-router-dom";
export class AddUser extends Component {
  render() {
    return (
      <div>
        <i
          className="material-icons"
          style={{ cursor: "pointer", fontSize: 50, padding: 10 }}
          onClick={() => this.props.history.goBack()}
        >
          keyboard_backspace
        </i>

        <center>
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
                placeholder="User Email"
              />
            </div>
            <br />
            <div className="mdl-textfield mdl-js-textfield">
              <input
                className="mdl-textfield__input myinput"
                type="text"
                placeholder="Enter User Password"
              />
            </div>
            <br />
            <button
              style={{ margin: 10 }}
              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            >
              Submit
            </button>
            <button
              style={{ margin: 10 }}
              onClick={() =>
                this.props.history.push(process.env.PUBLIC_URL + "/admin/user")
              }
              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            >
              Cancel
            </button>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(AddUser);
