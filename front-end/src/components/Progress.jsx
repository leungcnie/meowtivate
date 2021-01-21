import React from "react";
import styles from "./progress.css";

function Progress(props) {
  // const totalAmount = useAppState().items.length;
  // const { completed } = useItems();
  // const completedAmount = completed.length;

  // let completedPercentage = completedAmount / totalAmount;

  // if (isNaN(completedPercentage)) {
  //   completedPercentage = 0;
  // }
  const { items } = props;
  console.log("props.items in progress", props.items);
  // const itemsCount = props.items;

  return (
    <div className={styles.progress}>
      <div
        className={`${styles.progressbar} ${styles.completed}`}
        // style={{ width: `${completedPercentage * 100}%` }}
      >
        Hello {items.length}
      </div>
    </div>
  );
}

export default Progress;
