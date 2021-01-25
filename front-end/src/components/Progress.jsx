import React from "react";
import "./progress.css";

function Progress(props) {
  // console.log("currentStreaks", props);

  const {
    completedPercentage,
    completedAmount,
    totalAmount,
    currentStreaks,
  } = props;

  return (
    <div className="progress">
      <div
        className="todos-completed"
        style={{ width: `${completedPercentage * 100}%` }}
      ></div>
      <p>
        Completed {completedAmount} / {totalAmount}
      </p>
      <p>Here is your current streak: {currentStreaks}</p>
    </div>
  );
}

export default Progress;
