import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import "./SMSForm.css";
import { ContactSupportOutlined } from "@material-ui/icons";

class SMSForm extends Component {
  constructor(props) {
    console.log("props", props);
    super(props);

    this.state = {
      tasks: [],
      timer: "",
      message: {
        to: "",
        body: "",
      },
      submitting: false,
      error: false,
    };
    this.onSubmit = this.onSubmit.bind(this);

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

  // input field takes countdown
  // onchange when the text is meet

  // a function compare and counting down the time

  // combine with useEffect to check on time
  // when it meets the condition
  // fire the function

  // taking care of the sideEffect -> clear function

  // function get timer input
  // onHandleTimer(event) {
  //   this.setState({
  //     timer: event.target.value
  //   });
  // }

  //  // Run function to decide display
  //  useEffect(() => {
  //   // console.log("CURRENT PERCENTAGE IN USEEFFECT", percentage);
  //   if (percentage < 100) {
  //     setDisplay({ display: "none" });
  //   }
  //   decideDisplay(percentage);
  // }, [actions]);

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
    // console.log("undone", undone);
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
        <div>
          <label htmlFor="timer">Set Reminder time:</label>
          <input
            name="timer"
            id="timer"
            value={this.state.timer}
            onChange={this.onHandleChange}
          />
        </div>
        <button type="submit" disabled={this.state.submitting}>
          Send message
        </button>
      </form>
    );
  }
}

export default SMSForm;
