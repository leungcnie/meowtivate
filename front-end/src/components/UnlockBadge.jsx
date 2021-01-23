import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  display: {
<<<<<<< HEAD
    display: "block",
=======
    display: 'block',
>>>>>>> 3fd99de214eddb583efe1c2de50d2c6a0de6867d
  },
  root: {
    flexGrow: 1,
    maxHeight: "20rem",
    position: "absolute",
    top: "calc(50% - 10rem)",
    left: "calc(50% - 10rem)",
    zIndex: 100,
  },
  cat: {
    height: "15rem",
    position: "absolute",
    top: "calc(50% - 7rem)",
    left: "calc(50% - 5rem)",
    zIndex: 101,
  },
  text: {
    color: "#a0cdca",
    fontFamily: "Itim",
    fontSize: "3.5em",
    position: "absolute",
    top: "calc(50% + 3rem)",
    left: "calc(50% - 4.25em)",
    zIndex: 102,
    WebkitTextStroke: "darksalmon",
    WebkitTextStrokeWidth: "thin",
  },
}));

export default function UnlockBadge(props) {
  const classes = useStyles();
  const { state } = props;
  const { actions, unlocked } = state;
  let badgeStyle = {display: "none"};

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

  // Check if there's already an unlock for today
  const isTodayUnlocked = (date) => {
    // Get the array of unlocked cats dates
    const currentUnlocked = unlocked.map(obj => obj.date_unlocked.slice(0, 10));
    if (currentUnlocked.includes(date)) {
      return true;
    } else {
      return false;
    }
  }

  // Decide whether to display badge 
  const decideDisplay = (percentage) => {
    const todayUnlockExists = isTodayUnlocked(today);
    // If 100% complete and an unlock for today doesn't exist, unlock a cat
    if (percentage === 100 && !todayUnlockExists) {
      // Get locked cats IDs, randomly choose one
    }
  }

  return (
<<<<<<< HEAD
    <div className={classes.display}>
      <img
        className={classes.root}
        src="https://meowtivate.s3-us-west-2.amazonaws.com/unlock_badge.]"
        alt="unlock_badge"
      />
      {/* replace cat src with the props.image_url */}
      {/* <img className={classes.cat} src={}/> */}
      {/* <img className={classes.cat} src='https://meowtivate.s3-us-west-2.amazonaws.com/01cat.]'/> */}
=======
    <div className={classes.display} style={badgeStyle}>
      <img 
        className={classes.root} 
        src='https://meowtivate.s3-us-west-2.amazonaws.com/unlock_badge.png' 
        alt='unlock_badge'/>
      <img className={classes.cat} src='https://meowtivate.s3-us-west-2.amazonaws.com/01cat.png'/>
>>>>>>> 3fd99de214eddb583efe1c2de50d2c6a0de6867d
      {/* <img className={classes.cat} src='https://meowtivate.s3-us-west-2.amazonaws.com/02cat.]'/> */}
      <h2 className={classes.text}> CONGRATULATIONS!</h2>
    </div>
  );
}
