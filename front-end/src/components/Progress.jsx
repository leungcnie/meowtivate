import React from "react";
import "./progress.css";

function Progress(props) {
  // const { actions } = props;
  // const totalAmount = actions.length;
  // const completed = actions.filter((item) => (item.is_completed = true));
  // const completedAmount = completed.length;

  // const completedPercentage = completedAmount / totalAmount;

  const { todos, habits, actions } = props;
  const totalAmount = todos.length + habits.length;

  // const habitCompleted = habits.filter((item) => item.is_completed === true);
  // const todoCompleted = todos.filter((item) => item.is_completed === true);
  const completed = actions.filter((item) => item.is_completed === true);

  const completedAmount = completed.length;

  // const habitsPercentage = habitCompleted.length / totalAmount;
  // const todosPercentage = todoCompleted.length / totalAmount;
  const completedPrecentage = completedAmount / totalAmount;

  // console.log("props.todos in progress", props.todos);
  // console.log("props.habits in progress", props.habits);

  // const actionsCount = props.actions;

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
      Completed {completedAmount} / {totalAmount}
    </div>
  );
}

export default Progress;
