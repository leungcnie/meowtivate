import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Weather } from "../components/Weather";
import { CalendarApp } from "../components/Calendar-import";
import NavBar from '../components/NavBar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CatPlant from '../components/CatPlant';
// import getCurrentDate from "../helpers/getCurrentDate";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '5vw',
    paddingRight: '5vw',
    margin: 'auto',
  },
  margin: {
    marginTop: '2vh'
  }
}));

export default function DashboardPage(props) {
  const { state, streak, day, setDay } = props;
  const { actions } = state;

  // const { unlocked } = state;
  const classes = useStyles();

  // Go to next day
  const changeDay = () => {
    if (day >= 1 && day < 3) {
      setDay(prev => prev + 1)
    }
  }

  return (
    <div>
      <header>
      <NavBar />
      <h1>Welcome {props.state.account[0].name}</h1>
      </header>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={4}>
          <CalendarApp 
            state={state}
            day={day} />
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


        <Card className={classes.margin}>
          <CardContent>
            STREAK {streak} DAYS
          </CardContent>
        </Card>
        <Card className={classes.margin}>
          <CardContent>
            {streak * 100} MEOWCOINS
          </CardContent>
        </Card>

        <Button variant="contained" onClick={changeDay}>
          NEXT DAY
        </Button>


        </Grid>
        <Grid item xs={4}>
          <Grid>
            <Card>
              <CardContent>
                <Weather />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.margin}>
            <Card>
              <CardContent>
                <CatPlant actions={actions}/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}