import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ActionList from "./ActionList";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
  },
  header: {
    fontFamily: 'Varela Round',
    letterSpacing: "8px"
  },
}));

export default function ListContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>LET'S GET LOTS DONE TODAY</h2>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <h3>Daily Habits</h3>
              <ActionList items={props.habits} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <h3>To-Do Today</h3>
              <ActionList items={props.todos} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <h3> hello </h3>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
