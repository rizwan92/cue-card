import React, { Component } from "react";

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
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Submit
            </button>
          </form>
        </center>
      </div>
    );
  }
}

export default AddUser;
