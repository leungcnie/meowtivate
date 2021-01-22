import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Weather } from "../components/Weather";
import { CalendarApp } from "../components/Calendar-import";
import NavBar from '../components/NavBar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '5vw',
    paddingRight: '5vw',
    margin: 'auto',
  },
}));

export default function DashboardPage(props) {
  const { state } = props;
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={4}>
          <CalendarApp />
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Grid item>
                <Button component={Link} to="/lists">
                  My Lists
                </Button>
              </Grid>
              <Grid item>
                <Button component={Link} to="/cats">
                  My Collection
                </Button>
              </Grid>
              <Grid item>
                <Button component={Link} to="/account">
                  My Account
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Weather />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}