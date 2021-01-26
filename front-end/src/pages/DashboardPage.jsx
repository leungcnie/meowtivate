import React, { useState, useEffect } from 'react';
import { makeStyles, Grid, Button, Card, CardContent, IconButton } from '@material-ui/core';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import { Weather } from "../components/Weather";
import { CalendarApp } from "../components/Calendar-import";
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CatPlant from '../components/CatPlant';

// import getCurrentDate from "../helpers/getCurrentDate";
import SMSForm from "../components/SMSForm";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import getCurrentDate from "../helpers/getCurrentDate";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
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
    backgroundColor: '#a0cdca',
    width: '5rem',
    height: '8rem',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '2rem',
    alignItems: 'center',
    fontSize: '2em',
    color: 'white',
  },
  streakContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  listButton: {
    backgroundColor: '#fee2b1',
    fontFamily: 'Itim',
    margin: '0.5vh',
    fontSize: '1.5em',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    color: 'grey',
    '&:hover': {
      backgroundColor: '#dbc6a1',
      color: 'white',
    }
  },
  collectionButton: {
    backgroundColor: '#fcd0c5',
    fontFamily: 'Itim',
    margin: '0.5vh',
    fontSize: '1.5em',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    color: 'grey',
    '&:hover': {
      backgroundColor: '#e6c3bb',
      color: 'white',
    }
  },
  accountButton: {
    backgroundColor: '#aedaa5',
    fontFamily: 'Itim',
    margin: '0.5vh',
    fontSize: '1.5em',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    color: 'grey',
    '&:hover': {
      backgroundColor: '#a2bb9d',
      color: 'white',
    }
  },
  inventoryButton: {
    backgroundColor: '#e0c8df',
    fontFamily: 'Itim',
    margin: '0.5vh',
    fontSize: '1.5em',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    color: 'grey',
    '&:hover': {
      backgroundColor: '#c9bcc8',
      color: 'white',
    }
  },
}));

export default function DashboardPage(props) {
  const { 
    state, 
    streak, 
    day, 
    setDay, 
    id,
    coins,
    setCoins } = props;
  const { unlocked, actions } = state;
  const classes = useStyles();
  // const [coins, setCoins] = useState(streak * 100);

  // Go to next day
  const changeDay = () => {
    if (day >= 1 && day < 3) {
      setDay((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (id === 2) {
      setCoins(0);
    }
  }, [id])

  // useEffect(() => {
  //   const today = getCurrentDate();
  //   // Get array of unlocked dates in "yyyy-mm-dd"
  //   const currentUnlocked = unlocked.map(obj => obj.date_unlocked.slice(0, 10));
  //   if (currentUnlocked.includes(today)) {
  //     setCoins(prev => prev + 100);
  //   } else {
  //     setCoins(streak * 100)
  //   }
  // }, [streak])

  return (
    <div>
      <header>
      <NavBar />
      {/* <h1>Welcome {props.state.account[0].name}!</h1> */}
      </header>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={4} className={classes.grid}>
          {/* // <CalendarApp items={state.logDatas} /> */}
          {/* <Card>
              <CardContent>
                <Weather />
              </CardContent>
            </Card> */}
          <CalendarApp state={state} day={day} />
          <Grid>
            <IconButton onClick={changeDay}>
              <DoubleArrowRoundedIcon className={classes.iconButton}/>
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.grid}>
          <div className={classes.streakContainer}>
            <h3>CURRENT STREAK IS</h3>
            <div className={classes.streakNum}>
            <h1>{streak}</h1>
            </div>
            <h4>DAYS</h4>
          </div>
          <Card>
            <CardContent>
              <Grid item>
                <Button className={classes.listButton} component={Link} to="/lists">
                  My Lists
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.collectionButton} component={Link} to="/cats">
                  My Collection
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.accountButton} component={Link} to="/account">
                  My Account
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.inventoryButton} component={Link} to="/inventory">
                  My Inventory
                </Button>
              </Grid>
            </CardContent>
          </Card>
        <Card className={classes.margin}>
          <CardContent className={classes.coinstyle}>
            <h3 className={classes.numOfCoins}>{coins}</h3>
            <img className={classes.coin} src='https://meowtivate.s3-us-west-2.amazonaws.com/miscellaneous/meowcoin.png' alt='meowcoin' />
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4} className={classes.grid}>
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
                <CatPlant 
                  actions={actions}
                  state={state}/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
