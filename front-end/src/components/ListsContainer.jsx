import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ActionList from "./ActionList";
import IconButton from "@material-ui/core/IconButton";
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
    textAlign: 'center'
  },
  header: {
    fontFamily: 'Varela Round',
    letterSpacing: "8px"
  },
  centred: {
    textAlign: 'center',
  }
}));

export default function ListContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>LET'S GET LOTS DONE TODAY</h2>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <label className={classes.header}>Daily Habits</label>
              <ActionList items={props.habits} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <label className={classes.header}>To-Do Today</label>
              <ActionList items={props.todos} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <IconButton>
            <SaveRoundedIcon/>
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
