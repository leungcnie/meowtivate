import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import "./SMSForm.css";

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
      currentTime: "",
      alarmTime: "",
    };
    // this.onSubmit = this.onSubmit.bind(this);
    this.setAlarmTime = this.setAlarmTime.bind(this);
  }
  componentDidMount() {
    axios.get(`/api/actions/1`).then((res) => {
      console.log(res.data);
      const tasks = [...res.data];
      const undone = tasks.filter((item) => item.is_completed !== true);
      const undoneList = undone.map((item) => "\n 🐈 " + item.action_name);
      const msg =
        "_________________" +
        "\n ⏰  Reminder from Meowtivate. 🐈  \nHere are your " +
        undoneList.length +
        " unfinished tasks for today: " +
        undoneList;
      this.setState({
        message: { ...this.state.message, body: msg },
      });
    });
    this.clock = setInterval(() => this.setCurrentTime(), 1000);
    this.interval = setInterval(() => this.checkAlarmClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
    clearInterval(this.interval);
  }

  setCurrentTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString("en-US", { hour12: false }),
    });
  }

  setAlarmTime(event) {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ":00";
    this.setState({
      alarmTime: inputAlarmTimeModified,
    });
  }

  checkAlarmClock() {
    if (this.state.alarmTime == "undefined" || !this.state.alarmTime) {
      this.alarmMessage = "Please set your reminder alarm.";
    } else {
      this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
      if (this.state.currentTime === this.state.alarmTime) {
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
        alert(this.state.message.body);
      } else {
        console.log("Still have some time");
      }
    }
  }

  render() {
    const { tasks } = this.state;
    const undone = tasks.filter((item) => item.is_completed !== true);
    // // console.log("undone", undone);
    // console.log("this.setState", this.state.message);
    // console.log(JSON.stringify(this.state.message));
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
        <div>
          <h2>It is {this.state.currentTime}.</h2>
          <h2>{this.alarmMessage}</h2>
          <form>
            <input type="time" onChange={this.setAlarmTime}></input>
          </form>
        </div>
      </form>
    );
  }
}

export default SMSForm;
