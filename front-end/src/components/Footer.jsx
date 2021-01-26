import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontFamily: "itim",
    letterSpacing: "8px",
    textAlign: "center",
    fontSize: "1em",
    padding: '1em',
    color: '#a0cdca',
  },
  footerStyle: {
    display: 'flex',
    backgroundColor: "antiquewhite",
    alignItems: 'baseline',
    height: '50px',
    paddingTop: '10vh',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footerStyle}>
      <h1 className={classes.logo}>meowtivateINC@2021</h1>
    </footer>
  )
}
