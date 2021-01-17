import axios from "axios";
import React, { Component } from "react";
import "./style.css";

export default class ProfilePictureUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e, res, formData, config) {
    e.preventDefault();
    formData = new FormData();
    formData.append("profilepictures", this.state.file);
    config = {
      header: { "Content-Type": "multipart/form-data" },
    };
    axios
      .post("/profilepictures", formData, config)
      .then(this.windowReload)
      .catch((err) => {
        res.json(err);
      });
  }

  windowReload() {
    window.location.reload();
  }

  onChange(e, filename, index, filenameArray, previewProfilePictureFileName) {
    this.setState({ file: e.target.files[0] });
    filename = e.target.value;
    filenameArray = filename.split("\\");
    index = filenameArray.length - 1;
    filename = filenameArray[index];

    previewProfilePictureFileName = document.querySelector("#previewProfilePictureFileName");
    previewProfilePictureFileName.innerText = `Would you like to upload ${filename}?`;
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="col-12 col-lg-4 p-1 mx-auto text-center profilePictureUploadForm"
        style={{ border: "1px solid lightgrey" }}
      >
        <h4>Update Profile Picture</h4>
        <label className="btn btn-secondary col-12 col-md-6 mb-2">
          Select Photo
          <input
            type="file"
            name="profilepictures"
            className="profilePicturesInputBtn"
            onChange={this.onChange}
          ></input>
        </label>
        <div className="col-12 mx-auto">
            <button type="submit" className="btn btn-primary mb-2"><i class="fas fa-check"></i></button>
            <button className="btn btn-danger mb-2"><i class="fas fa-times"></i></button><br />
            <label id="previewProfilePictureFileName" className="col-12"></label>
        </div>
      </form>
    );
  }
}