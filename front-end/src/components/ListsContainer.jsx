import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ActionList from "./ActionList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    fontFamily: 'Varela Round',
    letterSpacing: "8px"
  },
}));

export default function ListContainer(props) {
  const classes = useStyles();
  const confirm = true;

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <h3 className={classes.header}>LET'S GET LOTS DONE TODAY</h3>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <label className={classes.header}>Daily Habits</label>
          <ActionList items={props.habits} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <label className={classes.header}>To-Do Today</label>
          <ActionList items={props.todos} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary">Save</Button>
        </Grid>
      </Grid>
    </div>
  );
}
