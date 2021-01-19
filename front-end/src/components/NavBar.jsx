import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "2rem",
  },
  menu: { 
  },
}));

export default function SimpleMenu() {
  const classes = useStyles();

  return (
    <header className={classes.menu}>
      <Menu/>
      <h1>Meowtivate</h1>
    </header>
  )
}
