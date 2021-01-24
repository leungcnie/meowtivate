import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import getCurrentDate from '../helpers/getCurrentDate';

const useStyles = makeStyles((theme) => ({
  // display: {
  //   display: 'block',
  // },
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
  const { state, catFunctions } = props;
  const { actions, unlocked, allCats } = state;
  const { addUnlocked } = catFunctions;
  const [display, setDisplay] = useState({display: "none"});
  const [catID, setCatID] = useState("01");

  //click away hook
  const [open, setOpen] = React.useState(false);

  // Calculate percentage of actions done
  const totalAmount = actions.length;
  const totalCompleted = actions.filter(obj => obj.is_completed === true).length;
  const initial = ( totalCompleted / totalAmount ) * 100;
  const percentage = Math.floor(initial / 10) * 10;

  // Get current date
  // let today = new Date();
  // const dd = String(today.getDate()).padStart(2, '0');
  // const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
  // const yyyy = today.getFullYear();
  // today = `${yyyy}-${mm}-${dd}`;
  const today = getCurrentDate();

  // console.log("date (unlocked)", today)
  // console.log("unlocked", unlocked);

  const currentUnlocked = unlocked.map(obj => obj.date_unlocked.slice(0, 10));
  const todayUnlockExists = currentUnlocked.includes(today);

  //Decide whether to display badge 
  const decideDisplay = (percentage) => {
    console.log("does unlock exist today?", todayUnlockExists);

    // If 100% complete and an unlock for today doesn't exist, unlock a cat
    if (percentage === 100 && !todayUnlockExists) {
      // Get locked cats IDs array
      const unlockedCatsIDs = unlocked.map(obj => obj.id);
      const lockedCats = allCats.filter(obj => !unlockedCatsIDs.includes(obj.id));
      const lockedCatsIDs = lockedCats.map(obj => obj.id);

      // Randomly choose one from a range
      const randomCatID = lockedCatsIDs[Math.floor(Math.random() * lockedCatsIDs.length)];

      // If cat_id is single digit, convert to string with 0 in front
      if (randomCatID <= 9) {
        setCatID(`0${randomCatID.toString()}`);
      } else {
        setCatID(randomCatID.toString());
      }

      setDisplay({display: "block"});
      setOpen(true);

      // console.log("catID", catID);
      // console.log("display", display);
    } 
  }

  // Run function to decide display
  useEffect(() => {
    // console.log("CURRENT PERCENTAGE IN USEEFFECT", percentage);
    if (percentage < 100) {
      setDisplay({display: "none"});
    }
    decideDisplay(percentage);
  }, [actions])

  useEffect(() => {
    // Call function to send POST req + change 'unlocked' state
    // Takes in a cat_id and user_id
    // console.log("display in useEffect", display);
    if (display.display === "block") {
      addUnlocked(Number(catID), 1);
    }
  }, [display])

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.display} style={display}>
      {open ? (<>
        <img 
          className={classes.root} 
          src='https://meowtivate.s3-us-west-2.amazonaws.com/unlock_badge.png' 
          alt='unlock_badge'/>
        <img 
          className={classes.cat} 
          src={`https://meowtivate.s3-us-west-2.amazonaws.com/${catID}cat.png`}/>
        <h2 className={classes.text}> CONGRATULATIONS!</h2>
        </>) : null}
      </div>
    </ClickAwayListener>
  );
}
