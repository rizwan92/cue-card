import React, { Component } from "react";
import ImageItem from "./ImageItem";
import { withRouter } from "react-router-dom";
class AddCard extends Component {
  state = {
    imageDetails: [
      { index: 1, addButton: false },
      { index: 2, addButton: false }
    ]
  };

  addImage = () => {
    const imageDetails = this.state.imageDetails;
    if (imageDetails.length !== 0) {
      const lastindex = imageDetails[imageDetails.length - 1].index;
      const currentindex = lastindex + 1;
      const currentobject = { index: currentindex, addButton: false };
      imageDetails.push(currentobject);
      this.setState({ imageDetails });
    } else {
      const currentobject = { index: 1, addButton: false };
      imageDetails.push(currentobject);
      this.setState({ imageDetails });
    }
  };

  removeImage = index => {
    const imageDetails = this.state.imageDetails;
    const removedImageDetails = imageDetails.filter(image => {
      return image.index !== index;
    });
    this.setState({ imageDetails: removedImageDetails });
  };
  render() {
    const imageDetails = this.state.imageDetails;
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

            <div className="input-container">
              {imageDetails.map(image => {
                return (
                  <ImageItem
                    index={image.index}
                    key={image.index}
                    addbutton={image.addbutton}
                    removeImage={this.removeImage}
                  />
                );
              })}
              <ImageItem
                index={3}
                addbutton={true}
                addImage={() => this.addImage}
              />
            </div>
            <button
              style={{ marginTop: 20 }}
              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            >
              Submit
            </button>
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(AddCard);
