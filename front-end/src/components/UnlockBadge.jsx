import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  display: {
    display: 'block',
  },
  root: {
    flexGrow: 1,
    maxHeight: '20rem',
    position: 'absolute',
    top: 'calc(50% - 10rem)',
    left: 'calc(50% - 10rem)',
    zIndex: 100,
  },
  cat: {
    height: '15rem',
    position: 'absolute',
    top: 'calc(50% - 7rem)',
    left: 'calc(50% - 5rem)',
    zIndex: 101,
  },
  text: {
    color: '#a0cdca',
    fontFamily: 'Itim',
    fontSize: '3.5em',
    position: 'absolute',
    top: 'calc(50% + 3rem)',
    left: 'calc(50% - 4.25em)',
    zIndex: 102,
    WebkitTextStroke: 'darksalmon',
    WebkitTextStrokeWidth: 'thin',
  }
}));


export default function UnlockBadge(props) {
  const classes = useStyles();
  const { state } = props;
  const { actions, unlocked } = state;

  // Calculate percentage of actions done
  const totalAmount = actions.length;
  const totalCompleted = actions.filter(obj => obj.is_completed === true).length;
  const initial = ( totalCompleted / totalAmount ) * 100;
  const percentage = Math.floor(initial / 10) * 10;

  // Get current date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;

  console.log("date", today)

  let badgeStyle = {display: "none"};

  // Check if there's already an unlock for today
  const checkTodaysUnlock = (date) => {
    
  }

  // const decideDisplay = (percentage) => {
  //   // If 100% complete and an unlock for today doesn't exist, unlock a cat
  //   if (percentage === 100 && )
  // }

  return (
    <div className={classes.display} style={badgeStyle}>
      <img 
        className={classes.root} 
        src='https://meowtivate.s3-us-west-2.amazonaws.com/unlock_badge.png' 
        alt='unlock_badge'/>
      <img className={classes.cat} src='https://meowtivate.s3-us-west-2.amazonaws.com/01cat.png'/>
      {/* <img className={classes.cat} src='https://meowtivate.s3-us-west-2.amazonaws.com/02cat.]'/> */}
      <h2 className={classes.text}> CONGRATULATIONS!</h2>
    </div>
  );
}
