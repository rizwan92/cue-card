import React, { Component } from "react";
import Modal from "react-responsive-modal";

export class Dashboard extends Component {
  state = {
    open: false
  };

  onOpenModal = () => this.setState({ open: true });
  onCloseModal = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <div className="mycontainer">
        <h1>User Page</h1>

        <button
          onClick={() => this.onOpenModal()}
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mdl-data-table__cell--non-numeric">Rizwan</td>
              <td>rizwan@gmail.com</td>
              <td>rizwan123</td>
            </tr>
            <tr>
              <td className="mdl-data-table__cell--non-numeric">nakul</td>
              <td>nakul@gmail.com</td>
              <td>nakul123</td>
            </tr>
            <tr>
              <td className="mdl-data-table__cell--non-numeric">Suraj</td>
              <td>Suraj@gmail.com</td>
              <td>suraj123</td>
            </tr>
          </tbody>
        </table>

        <Modal open={open} onClose={this.onCloseModal} center>
          <center>
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield">
                <label>User Name</label>
                <input
                  className="mdl-textfield__input myinput"
                  type="text"
                  placeholder="Enter User Name"
                />
              </div>
              <br />
              <div className="mdl-textfield mdl-js-textfield">
                <label>Enter User Email</label>
                <input
                  className="mdl-textfield__input myinput"
                  type="text"
                  placeholder="User Email"
                />
              </div>
              <br />
              <div className="mdl-textfield mdl-js-textfield">
                <label>User Password</label>
                <input
                  className="mdl-textfield__input myinput"
                  type="text"
                  placeholder="Enter User Password"
                />
              </div>
            </form>
          </center>
        </Modal>
      </div>
    );
  }
}

export default Dashboard;
