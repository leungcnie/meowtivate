import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontFamily: "itim",
    letterSpacing: "8px",
    textAlign: "center",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3em",
    },
    paddingBottom: "1em",
    color: "antiquewhite",
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
    <footer>
      <h1>Meowtivate</h1>
      <span>dark Mode</span>
    </footer>
  );
}
