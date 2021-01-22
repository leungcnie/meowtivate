import React, { Component } from "react";
import "./progress.css";
import { connect } from "react-redux";

class Progress extends Component {
  render() {
    const { actions, streaks, logDatas } = this.props;
    console.log("actions", actions);

    const totalAmount = actions.length;

    const completed = actions.filter((item) => item.is_completed === true);

    const completedAmount = completed.length;
    const completedPrecentage = completedAmount / totalAmount;

    // console.log("progress", streaks);

    // const getStreaks = (obj) => {
    //   if (obj.streak > obj.current_streak) {
    //     return obj.streak;
    //   }
    //   return obj.current_streak;
    // };
    // const currentStreaks = getStreaks(streaks[0]);

    // console.log("currentStreaks", currentStreaks);

    return (
      <div className="progress">
        <div
          className="todos-completed"
          style={{ width: `${completedPrecentage * 100}%` }}
        ></div>
        Completed {completedAmount} / {totalAmount}
        {/* <p>Here is your current streak: {currentStreaks}</p> */}
      </div>
    );
  }
}

const calStateToProps = (state) => {
  return {
    actions: state.actions,
    streaks: state.streaks,
    logDatas: state.logDatas,
  };
};

export default connect(calStateToProps)(Progress);
