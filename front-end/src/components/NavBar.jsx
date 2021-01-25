import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  logo: {
    fontFamily: "itim",
    letterSpacing: "8px",
    textAlign: "center",
    fontSize: "3rem",
    paddingBottom: '3.5vh',
    marginTop: '0px',
    color: 'white',
  },
  navStyle: {
    textAlign: "start",
    backgroundColor: "#a0cdca",
  },
  menuStyle: {
    fontSize: '3em',
    color: '#fcd0c5',
  }
}));

export default function SimpleMenu() {
  const classes = useStyles();

  return (
    <header className={classes.navStyle}>
      <Menu />
      <h1 className={classes.logo}>Meowtivate</h1>
    </header>
  )
}
