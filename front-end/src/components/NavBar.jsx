import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  logo: {
    fontFamily: "itim",
    letterSpacing: "8px",
    textAlign: "center",
    fontSize: "4rem",
    paddingBottom: '1em',
    color: 'antiquewhite',
    lineHeight: 0,
  },
  navStyle: {
    textAlign: "start",
    backgroundColor: "#a0cdca",
  },
}));

export default function SimpleMenu() {
  const classes = useStyles();

  return (
    <header className={classes.navStyle}>
      <Menu/>
      <h1 className={classes.logo}>Meowtivate</h1>
    </header>
  )
}
