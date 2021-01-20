import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Weather } from "../components/Weather";
import { CalendarApp } from "../components/Calendar-import";
import NavBar from '../components/NavBar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

export default function DashboardPage(props) {
  const { state } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CalendarApp />
        </Grid>
        <Grid item xs={4}>
          <Grid item>
            <Button component={Link} to="/lists">
              My Lists
            </Button>
          </Grid>
          <Grid item>
            <Button component={Link} to="/cats">
              My Cats
            </Button>
          </Grid>
          <Grid item>
            <Button component={Link} to="/account">
              My Account
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={4}>
        <Weather />
        </Grid>
      </Grid>
    </div>
  )
}