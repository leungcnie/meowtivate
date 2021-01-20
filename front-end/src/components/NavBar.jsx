import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  logo: {
    fontFamily: "itim",
    letterSpacing: "8px",
    textAlign: "center",
    fontSize: "3rem",
  },
  menu: {
    textAlign: "start",
  }
}));

export default function SimpleMenu() {
  const classes = useStyles();

  return (
    <header className={classes.menu}>
      <Menu />
      <h1 className={classes.logo}>Meowtivate</h1>
    </header>
  )
}
