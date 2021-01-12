import React, { Component } from "react";

export default class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  postStatus(req, res) {
    fetch("/api/status", {
      method: "post",
      body: JSON.stringify({
        status: this.state.status,
      }),
      headers: {
        Accept: "application/json",
        "Content/Type": "application/json",
      },
    })
      .then(res.json())
      .catch((err) => {
        res.json(err);
      });
  }

  render() {
    return (
      <div id="statusForm" className="statusForm">
        <form onSubmit={this.postStatus.bind(this)}>
          <textarea
            name="statusUpdate"
            id="statusUpdate"
            cols="100%"
            rows="3"
            placeholder="What's on your mind?"
            className="px-3 py-1"
          />
          <input type="submit" value="Post Update" />
        </form>
      </div>
    );
  }
}
