import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";


const useStyles = makeStyles(theme => ({
  pot: {
    maxWidth: "10vw",
    position: 'relative',
    zIndex: 2,
    top: 0,
    left: 0,
  },
  plant: {
    position: 'absolute',
    margin: 'auto',
    width: "8vw",
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 1,

  },
  animatedItem: {
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`
  },
  animatedItemExiting: {
    animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
    transform: "translateY(-200%)"
  },
  "@keyframes myEffect": {
    "0%": {
      transform: "scale(1)",
      transform: "translateY(0%)",
      // opacity: 1,
    },
    "16%": {
      transform: "scale(-0.32)",
      transform: "translateY(-132.27%)",
      // opacity: -0.32,

    },
    "28%": {
      transform: "scale(0.13)",
      transform: "translateY(-86.88%)",
      // opacity: 0.13,


    },
    "44%": {
      transform: "scale(-0.05)",
      transform: "translateY(-104.63%)",
      // opacity: -0.05,


    },
    "59%": {
      transform: "scale(0.02)",
      transform: "translateY(-98.36%)",
      // opacity: 0.02,


    },
    "73%": {
      transform: "scale(-0.01)",
      transform: "translateY(-100.58%)",
      // opacity: -0.01,


    },
    "88%": {
      transform: "scale(0)",
      transform: "translateY(-99.8%)",
      // opacity: 0,


    },
    "100%": {
      opacity: 1,
      transform: "scale(0)",
      transform: "translateY(-100%)",
      // opacity: 0,

    }
  },
  "@keyframes myEffectExit": {
    "0%": {
      transform: "scale(1)",
      transform: "translateY(0%)",
      // opacity: 1,
    },
    "16%": {
      transform: "scale(-0.32)",
      transform: "translateY(-132.27%)",
      // opacity: -0.32,

    },
    "28%": {
      transform: "scale(0.13)",
      transform: "translateY(-86.88%)",
      // opacity: 0.13,


    },
    "44%": {
      transform: "scale(-0.05)",
      transform: "translateY(-104.63%)",
      // opacity: -0.05,


    },
    "59%": {
      transform: "scale(0.02)",
      transform: "translateY(-98.36%)",
      // opacity: 0.02,


    },
    "73%": {
      transform: "scale(-0.01)",
      transform: "translateY(-100.58%)",
      // opacity: -0.01,


    },
    "88%": {
      transform: "scale(0)",
      transform: "translateY(-99.8%)",
      // opacity: 0,


    },
    "100%": {
      opacity: 1,
      transform: "scale(0)",
      transform: "translateY(-100%)",
      // opacity: 0,

    }
  }
}));

export default function CatPlant(props) {
  const classes = useStyles();
  const [exit, setExit] = React.useState(false);

  return (
    <>
      <div
        className={clsx(classes.animatedItem, {
          [classes.animatedItemExiting]: exit
        })}
      >
        <h1>Hello CodeSandbox</h1>
        {/* <Button onClick={() => setExit(true)}>Click to exit</Button> */}
        <img className={classes.plant} src="https://meowtivate.s3-us-west-2.amazonaws.com/90plant+.png" alt="plant"/>
      </div>
      <div>
        <img className={classes.pot} src="https://meowtivate.s3-us-west-2.amazonaws.com/pot.png" alt="pot"/>
      </div>
      {exit && <Button onClick={() => setExit(false)}>Click to enter</Button>}
    </>
  );
}