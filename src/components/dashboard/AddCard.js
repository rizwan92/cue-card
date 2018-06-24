import React, { Component } from "react";
import ImageItem from "./ImageItem";
import { withRouter } from "react-router-dom";
class AddCard extends Component {
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
                placeholder="Add Title"
              />
            </div>

            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Submit
            </button>

            <div className="input-container">
              <ImageItem index={1} />
              <ImageItem index={2} />
              <ImageItem index={3} />
              <ImageItem index={4} />
              <ImageItem index={5} />
              <ImageItem index={6} />
            </div>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(AddCard);
