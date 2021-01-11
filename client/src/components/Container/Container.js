import React, { Component } from "react";
import "./style.css";

export default class Container extends Component {
  render() {
    return (
      <div className="container contents">
        <div className="row">
          <div className="profilePicture col-12">
            <section>
                <div className="row">
                    <div className="col-md-4 col-12 image">
                        Image
                    </div>
                    <div className="col-md-8 col-12 description">
                        Description
                    </div>
                </div>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="newUpdateMessage col-12">
            <section>Buttons for a new update message</section>
          </div>
        </div>
        <div className="row">
          <div className="gallery col-12">
            <section>Carrousel or Collage</section>
          </div>
        </div>
        <div className="row">
          <div className="updateMessages col-12">
            <section>Messages with Updates</section>
          </div>
        </div>
      </div>
    );
  }
}