import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "./myButton";
import ToDoList from "./ToDoList";
import MenuListComposition from "./Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

export default function ListContainer(props) {
  const classes = useStyles();
  const confirm = true;

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <MenuListComposition />
      </Grid>
      <Grid item xs={12}>
        <h1>LET'S GET LOTS DONE TODAY</h1>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <label>Daily Habits</label>

          <ToDoList items={props.habits} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <label>To-Do Today</label>

          <ToDoList items={props.tasks} />
        </Grid>
        <Grid item xs={12}>
          <Button confirm={confirm} />
        </Grid>
      </Grid>
    </div>
  );
}
