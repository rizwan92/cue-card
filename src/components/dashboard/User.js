import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Dashboard extends Component {
  render() {
    return (
      <div className="mycontainer">
        <h1>User Page</h1>

        <button
          onClick={() =>
            this.props.history.push(process.env.PUBLIC_URL + "/admin/adduser")
          }
          className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored useraddbutton"
        >
          <i className="material-icons">add</i>
        </button>

        {/* table for user listing */}

        <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mdl-data-table__cell--non-numeric">Rizwan</td>
              <td>rizwan@gmail.com</td>
              <td>rizwan123</td>
              <td>
                <i className="material-icons tableicon">create</i>
                <i className="material-icons tableicon">delete_sweep</i>
              </td>
            </tr>
            <tr>
              <td className="mdl-data-table__cell--non-numeric">nakul</td>
              <td>nakul@gmail.com</td>
              <td>nakul123</td>
              <td>
                <i className="material-icons tableicon">create</i>
                <i className="material-icons tableicon">delete_sweep</i>
              </td>
            </tr>
            <tr>
              <td className="mdl-data-table__cell--non-numeric">Suraj</td>
              <td>Suraj@gmail.com</td>
              <td>suraj123</td>
              <td>
                <i className="material-icons tableicon">create</i>
                <i className="material-icons tableicon">delete_sweep</i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(Dashboard);
