import React, { useState, useEffect } from 'react';
import { makeStyles, Grid, Button, Card, CardContent, IconButton } from '@material-ui/core';
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';
import { Weather } from "../components/Weather";
import { CalendarApp } from "../components/Calendar-import";
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
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
  },
  coin: {
    height: '2.5rem'
  },
  coinstyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numOfCoins: {
    paddingRight: '0.5rem'
  },
  iconButton: {
    width: '4rem',
    height: '4rem',
  },
  streakNum: {
    backgroundColor: 'white',
    width: '4rem',
    height: '4rem',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '2rem',
    alignItems: 'center',
  },
  streakContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
      <h1>Welcome {props.state.account[0].name}!</h1>
      </header>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={4}>
          <CalendarApp 
            state={state}
            day={day} />
        </Grid>
        <Grid item xs={4}>
          <div className={classes.streakContainer}>
            <h3>STREAK</h3>
            <div className={classes.streakNum}>
            <h1>{streak}</h1>
            </div>
            <h4>DAYS</h4>
          </div>
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
          <CardContent className={classes.coinstyle}>
            <h3 className={classes.numOfCoins}>{streak * 100} </h3>
            <img className={classes.coin} src='https://meowtivate.s3-us-west-2.amazonaws.com/miscellaneous/meowcoin.png' alt='meowcoin' />
          </CardContent>
        </Card>
          <IconButton onClick={changeDay}>
            <ForwardRoundedIcon className={classes.iconButton}/>
          </IconButton>
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