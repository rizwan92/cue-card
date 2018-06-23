import React, { Component } from "react";
import CardItem from "./CardItem";
import Modal from "react-responsive-modal";
import "./card.css";
import ImageItem from "./ImageItem";
export class Dashboard extends Component {
  state = {
    open: false
  };

  render() {
    const { open } = this.state;
    return (
      <div className="mycontainer">
        <button
          className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored useraddbutton"
          onClick={() => this.setState({ open: true })}
        >
          <i className="material-icons">add</i>
        </button>

        <div className="card-container">
          <CardItem />
          <CardItem />
          <CardItem />
        </div>

        <Modal open={open} onClose={this.onCloseModal} center>
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield">
              <label>Add Title</label>
              <input
                className="mdl-textfield__input myinput"
                type="text"
                placeholder="Add Title"
              />
            </div>

            <div className="input-container">
              <ImageItem index={1} />
              <ImageItem index={2} />
              <ImageItem index={3} />
            </div>
          </form>
        </Modal>
      </div>
    );
  }

  onOpenModal = () => this.setState({ open: true });
  onCloseModal = () => this.setState({ open: false });
}

export default Dashboard;
