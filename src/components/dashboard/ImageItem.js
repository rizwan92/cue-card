import React, { Component } from "react";

export class ImageItem extends Component {
  state = {
    image: false
  };
  imageUpload = e => {
    let file = e.currentTarget.files[0];
    var box = document.querySelector(`#box${this.props.index}`);
    let thumb = box.querySelector(`#js--image-preview${this.props.index}`),
      reader = new FileReader();
    reader.onload = function() {
      thumb.style.backgroundImage = "url(" + reader.result + ")";
    };
    reader.readAsDataURL(file);
    thumb.className += " js--no-default";
    this.setState({ image: true });
  };
  render() {
    return (
      <div>
        {this.props.addbutton ? (
          <div className="addbutton" onClick={this.props.addImage()}>
            +
          </div>
        ) : (
          <div className="box" id={`box${this.props.index}`}>
            <div className="plussign">+</div>
            <div
              className="js--image-preview"
              id={`js--image-preview${this.props.index}`}
            />
            <div className="image-upload">
              <input
                type="file"
                accept="image/*"
                className="myinputfile"
                onChange={e => this.imageUpload(e)}
              />
              {this.state.image ? (
                <i
                  className="material-icons minussign"
                  onClick={() => this.props.removeImage(this.props.index)}
                >
                  clear
                </i>
              ) : null}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ImageItem;
