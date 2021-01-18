import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "./myButton";
import ToDoList from "./ToDoList";
import MenuListComposition from "./Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const confirm = true;


  return (
    <div className={classes.root}>
        <Grid item xs={12}>
          <MenuListComposition/>
          <Paper className={classes.paper}>Meowtivate</Paper>
        </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <label>
            Habit Tracker
          </label>
          <ToDoList/>   
        </Grid>
        <Grid item xs={12} sm={6}>
          <label>
            To-Do Today
          </label>
          <ToDoList/>        
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button confirm = { confirm } />
        </Grid>
      </Grid>
    </div>
  );
}