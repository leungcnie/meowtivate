import React from "react";
import "./styles/progress.css";

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
        style={{ height: `${completedPercentage * 100}%` }}
      ></div>
      {/* <h2>Today's Progress</h2> */}
      {/* <p>Here is your current streak: {currentStreaks}</p> */}
    </div>
  );
}

export default Progress;
