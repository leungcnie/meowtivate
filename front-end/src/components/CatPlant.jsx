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
  animatedItem: {
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`,
  },

  "@keyframes myEffect": {
    '0%': {
      transform: 'translateY(0%)'
    },

    '16%': {
      transform: 'translateY(-132%)'
    },

    '28%': {
      transform: 'translateY(-86%)'
    },

    '44%': {
      transform: 'translateY(-104%)'
    },

    '58%': {
      transform: 'translateY(-98%)'
    },

    '72%': {
      transform: 'translateY(-100%)'
    },

    '88%': {
      transform: 'translateY(-97%)'
    },

    '100%': {
      transform: 'translateY(-100%)'
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
          )}
        >
          <img className={classes.plant} src="https://meowtivate.s3-us-west-2.amazonaws.com/90plant-crop.png" alt="plant"/>
        </div>
        <div>
          <img className={classes.pot} src="https://meowtivate.s3-us-west-2.amazonaws.com/pot.png" alt="pot"/>
        </div>
          <Button onClick={() => setStart(true)}>start</Button>
      </article>
      {/* {start && <Button onClick={() => setStart(true)}>enter</Button>} */}
    </>
  );
}