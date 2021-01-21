import React from "react";
import "./progress.css";

function Progress(props) {
  const { items } = props;
  const totalAmount = items.length;
  const completed = items.filter((item) => (item.is_completed = true));
  const completedAmount = completed.length;

  const completedPercentage = completedAmount / totalAmount;

  console.log("props.items in progress", props.items);
  // const itemsCount = props.items;

  return (
    <div className="progress">
      <div
        className="completed"
        style={{ width: `${completedPercentage * 100}%` }}
      ></div>
      Hello {completedAmount} / {totalAmount}
    </div>
  );
}

export default Progress;
