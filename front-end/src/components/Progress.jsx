import React from "react";
import "./progress.css";

function Progress(props) {
  // const { lists } = props;
  // const totalAmount = lists.length;
  // const completed = lists.filter((item) => (item.is_completed = true));
  // const completedAmount = completed.length;

  // const completedPercentage = completedAmount / totalAmount;

  const { todos, habits, lists } = props;
  const totalAmount = todos.length + habits.length;

  // const habitCompleted = habits.filter((item) => item.is_completed === true);
  // const todoCompleted = todos.filter((item) => item.is_completed === true);
  const completed = lists.filter((item) => item.is_completed === true);

  const completedAmount = completed.length;

  // const habitsPercentage = habitCompleted.length / totalAmount;
  // const todosPercentage = todoCompleted.length / totalAmount;
  const completedPrecentage = completedAmount / totalAmount;

  // console.log("props.todos in progress", props.todos);
  // console.log("props.habits in progress", props.habits);

  // const listsCount = props.lists;

  return (
    <div className="progress">
      {/* <div
        className="habits-completed"
        style={{ width: `${habitsPercentage * 100}%` }}
      ></div> */}
      <div
        className="todos-completed"
        style={{ width: `${completedPrecentage * 100}%` }}
      ></div>
      Hello {completedAmount} / {totalAmount}
    </div>
  );
}

export default Progress;
