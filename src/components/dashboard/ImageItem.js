import React, { Component } from "react";

export class ImageItem extends Component {
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
  };
  render() {
    return (
      <div className="box" id={`box${this.props.index}`}>
        <div
          className="js--image-preview"
          id={`js--image-preview${this.props.index}`}
        />
        <div className="upload-options">
          <label>
            <input
              type="file"
              className="image-upload"
              accept="image/*"
              onChange={e => this.imageUpload(e)}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default ImageItem;
