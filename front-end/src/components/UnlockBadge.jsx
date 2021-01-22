import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: '20rem',
    position: 'absolute',
    top: 'calc(50% - 10rem)',
    left: 'calc(50% - 10rem)',
    zIndex: 100,
  },
}));


export default function UnlockBadge(props) {
  const classes = useStyles();

  return (
      <img className={classes.root} src='https://meowtivate.s3-us-west-2.amazonaws.com/unlock_badge.png' alt='unlock_badge'/>
  );
}
