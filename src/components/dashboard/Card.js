import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CardItem from "./CardItem";
import "./card.css";
export class Dashboard extends Component {
  render() {
    return (
      <div className="mycontainer">
        <button
          className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored useraddbutton"
          onClick={() => this.props.history.push("/admin/addcard")}
        >
          <i className="material-icons">add</i>
        </button>

        <div className="card-container">
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
