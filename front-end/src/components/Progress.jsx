import React from "react";
import "./progress.css";

function Progress(props) {
  const { actions, streaks, logDatas } = props;
  const totalAmount = actions.length;

  const completed = actions.filter((item) => item.is_completed === true);

  const completedAmount = completed.length;
  const completedPrecentage = completedAmount / totalAmount;

  // console.log("progress", streaks);

  const getStreaks = (obj) => {
    if (obj.streak > obj.current_streak) {
      return obj.streak;
    }
    return obj.current_streak;
  };
  const currentStreaks = getStreaks(streaks[0]);

  // console.log("currentStreaks", currentStreaks);

  return (
    <div className="progress">
      <div
        className="todos-completed"
        style={{ width: `${completedPrecentage * 100}%` }}
      ></div>
      Completed {completedAmount} / {totalAmount}
      <p>Here is your current streak: {currentStreaks}</p>
    </div>
  );
}

export default Progress;
