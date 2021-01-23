import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ActionList from "./ActionList";
import CatPlant from "./CatPlant";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Progress from "./Progress";
import UnlockBadge from "./UnlockBadge";
import calculateChecked from "../helpers/calculateChecked";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: "10vw",
    minHeight: "25vh",
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "8px",
  },
  plantbox: {
    position: "relative",
    alignText: "center",
    margins: "auto",
    top: "0px",
    left: "0px",
    zIndex: 1,
  },
  lists: {
    minWidth: "10vw",
    minHeight: "25vh",
  },
}));

export default function ListContainer(props) {
  const { state, actionFunctions } = props;
  const { actions, todos, habits, streaks, logDatas } = state;
  const classes = useStyles();

  const { postLogData, updateStreak } = actionFunctions;
  console.log("actionFunctions in ListsContainer", actionFunctions);
  console.log("streaks in ListsContainer", streaks);
  console.log("streaks in logDatas", logDatas);

  const streakUpdate = (completedPercentage, streaks) => {
    const currentDate = new Date();
    if (completedPercentage >= 1) {
      postLogData(1, currentDate, true);
      streaks[0].current_streak += 1;
      if (streaks[0].current_streak > streaks[0].streak) {
        streaks[0].streak = streaks[0].current_streak;
      }
    }
    const currentTime = new Date().getTime();
    if (2211363933078 < currentTime) {
      streaks[0].current_streak = 0;
      streaks[0].streak = 0;
    }
    updateStreak(1, streaks[0].streak, streaks[0].current_streak);
  };

  console.log("habits in ListsContainer", habits);

  const completed = actions.filter((obj) => obj.is_completed === true);
  const checkedHabits = completed.filter((obj) => obj.category_id === 2);
  const checkedTodos = completed.filter((obj) => obj.category_id === 1);
  const habitIDs = calculateChecked(checkedHabits);
  const todoIDs = calculateChecked(checkedTodos);

  console.log("completed", completed);
  console.log("checkedHabits", checkedHabits);
  console.log("checkedTodos", checkedTodos);

  const totalAmount = actions.length;

  const completedAmount = completed.length;
  const completedPercentage = completedAmount / totalAmount;

  console.log("completedPercentage", completedPercentage);

  // onChange={() => streakUpdate(completedPercentage, streaks)}

  return (
    <>
      {completedPercentage === "1" && <UnlockBadge />}
      <div className={classes.root}>
        <h2 className={classes.header}>LET'S GET LOTS DONE TODAY</h2>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Card className={classes.lists}>
              <CardContent>
                <h3>Daily Habits</h3>
                <ActionList
                  items={habits}
                  category={2}
                  actionFunctions={actionFunctions}
                  initChecked={habitIDs}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.lists}>
              <CardContent>
                <h3>To-Do Today</h3>
                <ActionList
                  items={todos}
                  category={1}
                  actionFunctions={actionFunctions}
                  initChecked={todoIDs}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardContent>
                <div>
                  <h3>
                    Today's Progress {completedAmount} / {totalAmount}
                  </h3>
                </div>
                <div className={classes.plantbox}>
                  <CatPlant />
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Progress
          completedPercentage={completedPercentage}
          completedAmount={completedAmount}
          totalAmount={totalAmount}
          // currentStreaks={currentStreaks}
        />
      </div>
    </>
  );
}
