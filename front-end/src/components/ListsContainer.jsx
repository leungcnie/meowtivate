import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "./SaveButton";
import ActionList from "./ActionList";

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
        <h2>LET'S GET LOTS DONE TODAY</h2>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <label>Daily Habits</label>

          <ActionList items={props.habits} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <label>To-Do Today</label>

          <ActionList items={props.todos} />
        </Grid>
        <Grid item xs={12}>
          <Button confirm={confirm} />
        </Grid>
      </Grid>
    </div>
  );
}
