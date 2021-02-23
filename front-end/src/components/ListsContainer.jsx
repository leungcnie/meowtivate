import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ActionList from "./ActionList";
import CatPlant from "./CatPlant";
import Progress from "./Progress";
import UnlockBadge from "./UnlockBadge";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '10vw',
    marginRight: '10vw',
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "6px",
    color: "grey",
    lineHeight: 0,
    paddingTop: "2rem",
    paddingBottom: "2rem",
    fontSize: "2em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      padding: "1em",
      letterSpacing: "3px",
    },
  },
  plantbox: {
    position: "static",
    zIndex: 1,
    minWidth: "10vw",
    minHeight: "28vh",
  },
  article: {
    backgroundColor: "rgb(201,188,200, 0.4)",
    padding: "2rem",
    borderRadius: "2rem",
    minHeight: "35vh",
  },
  progress: {
    display: "flex",
    justifyContent: "center",
  },
  subtitle: {
    color: "grey",
    lineHeight: 1,
    fontSize: "1.5em",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0",
    },
  },
  list: {
    height: "20vh",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: '10vw',
    paddingRight: '10vw',
  },
  potGrid: {
    paddingLeft: "3rem",
  },
}));

// Return array of IDs of checked items
const calculateChecked = (items) => {
  const completedArr = items.filter(obj => obj.is_completed === true);
  const checked = completedArr.map(obj => obj.id);

  return checked;
}

export default function ListContainer(props) {
  const { state, actionFunctions, catFunctions } = props;
  const { actions, todos, habits } = state;
  const classes = useStyles();

  const completed = actions.filter((obj) => obj.is_completed === true);
  const checkedHabits = completed.filter((obj) => obj.category_id === 2);
  const checkedTodos = completed.filter((obj) => obj.category_id === 1);
  const habitIDs = calculateChecked(checkedHabits);
  const todoIDs = calculateChecked(checkedTodos);

  const totalAmount = actions.length;
  const completedAmount = completed.length;
  const completedPercentage = completedAmount / totalAmount;

  return (
    <>
      <UnlockBadge state={state} catFunctions={catFunctions} />
      <h2 className={classes.header}>LET'S GET LOTS DONE TODAY!</h2>
      <Grid className={classes.container} container spacing={4}>
        <Grid item xs={11} sm={5.5} md={4}>
          <article className={classes.article}>
            <h3 className={classes.subtitle}>DAILY HABITS</h3>
            <ActionList
              className={classes.lists}
              items={habits}
              category={2}
              actionFunctions={actionFunctions}
              initChecked={habitIDs}
            />
          </article>
        </Grid>
        <Grid item xs={11} sm={5.5} md={4}>
          <article className={classes.article}>
            <h3 className={classes.subtitle}>TO-DO LIST</h3>
            <ActionList
              items={todos}
              category={1}
              actionFunctions={actionFunctions}
              initChecked={todoIDs}
            />
          </article>
        </Grid>
        <Grid item xs={8} sm={8} md={3} className={classes.potGrid}>
          <article className={classes.article}>
            <div className={classes.plantbox}>
              <h3 className={classes.subtitle}>TODAY'S PROGRESS</h3>
              <CatPlant
                className={classes.pot}
                actions={actions}
                state={state}
              />
            </div>
          </article>
        </Grid>
        <Grid item xs={3} sm={3} md={1}>
          <article>
            <div className={classes.progress}>
              <Progress
                completedPercentage={completedPercentage}
                completedAmount={completedAmount}
                totalAmount={totalAmount}
              />
            </div>
          </article>
        </Grid>
      </Grid>
    </>
  );
}
