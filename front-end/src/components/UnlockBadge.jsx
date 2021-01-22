import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  display: {
    display: 'none',
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

  return (
    <div className={classes.display}>
      <img className={classes.root} src='https://meowtivate.s3-us-west-2.amazonaws.com/unlock_badge.]' alt='unlock_badge'/>
      {/* replace cat src with the props.image_url */}
      {/* <img className={classes.cat} src={}/> */}
      {/* <img className={classes.cat} src='https://meowtivate.s3-us-west-2.amazonaws.com/01cat.]'/> */}
      {/* <img className={classes.cat} src='https://meowtivate.s3-us-west-2.amazonaws.com/02cat.]'/> */}
      <h2 className={classes.text}> CONGRATULATIONS!</h2>
    </div>
  );
}
