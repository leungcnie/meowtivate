import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  pot: {
    width: '10vw',
    position:'relative',
    top: '0px',
    left: '0px',
    zIndex: 2,
  },
  plant: {
    width: '10vw',
    position:'relative',
    top: '50px',
    left: '0px',
    zIndex: 1,
  },
  ten_plant: {
    width: '10vw',
    position:'relative',
    top: '75px',
    left: '0px',
    zIndex: 1,
  },
  animatedItem: {
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`,
  },

  "@keyframes myEffect": {
    '0%': {
      transform: 'translateY(30%)',
      opacity:0,
    },
    '16%': {
      transform: 'translateY(0%)',
      opacity: 0.75,
    },
    '28%': {
      transform: 'translateY(2%)',
      opacity: 1,
    },
    '44%': {
      transform: 'translateY(3%)'
    },
    '59%': {
      transform: 'translateY(0%)'
    },
    '73%': {
      transform: 'translateY(0%)'
    },
    '88%': {
      transform: 'translateY(0%)'
    },
    '100%': {
      transform: 'translateY(0%)'
    }, 
  }
}));

export default function CatPlant(props) {
  const classes = useStyles();
  const [start, setStart] = React.useState(false);

  return (
    <>
      <article>
        <div
          className={clsx(
            {[classes.animatedItem]: start}
          )}>
          <img className={classes.ten_plant} src="https://meowtivate.s3-us-west-2.amazonaws.com/10plant-crop.png" alt="plant"/>
          {/* <img className={classes.plant} src="https://meowtivate.s3-us-west-2.amazonaws.com/90plant-crop.png" alt="plant"/> */}
        </div>
        <div>
          <img className={classes.pot} src="https://meowtivate.s3-us-west-2.amazonaws.com/pot.png" alt="pot"/>
        </div>
          <Button onClick={() => setStart(true)}>start</Button>
      </article>
      {start && <Button onClick={() => setStart(false)}>reset</Button>}
    </>
  );
}