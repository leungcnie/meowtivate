import React, { Component } from "react";
import axios from "axios";

import "./SMSForm.css";
import { ContactSupportOutlined } from "@material-ui/icons";

class SMSForm extends Component {
  constructor(props) {
    console.log("props", props);
    super(props);

    this.state = {
      tasks: [],
      message: {
        to: "",
        body: "",
      },
      submitting: false,
      error: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios.get("/api/actions/1").then((res) => {
      console.log(res.data);
      const tasks = [...res.data];
      const undone = tasks.filter((item) => item.is_completed === false);
      const undoneList = undone.map((item) => item.action_name);
      this.setState({
        message: { ...this.state.message, body: undoneList },
      });
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.message),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              body: "",
            },
          });
        } else {
          this.setState({
            error: true,
            submitting: false,
          });
        }
      });
  }

  render() {
    const { tasks } = this.state;
    const undone = tasks.filter((item) => item.is_completed === false);
    console.log("this.setState", this.state);

    const undoneList = undone.length ? (
      undone.map((item) => {
        return (
          <div>
            <li key={item.id}>{item.action_name}</li>
          </div>
        );
      })
    ) : (
      <div>All done for today</div>
    );
    return (
      <form
        onSubmit={this.onSubmit}
        className={this.state.error ? "error sms-form" : "sms-form"}
      >
        <p name="body" id="body" value={undoneList}></p>
        {/* <div>
          <label htmlFor="body">Body:</label>
          <textarea
            name="body"
            id="body"
            value={this.state.message.body}
            onChange={this.onHandleChange}
          />
        </div> */}
        <button type="submit" disabled={this.state.submitting}>
          Send message
        </button>
      </form>
    );
  }
}

export default SMSForm;
