import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  pot: {
    width: '10vw',
    position:'absolute',
    bottom: '0px',
    left: 'calc(50% - 5vw)',
    zIndex: 2,
  },
  plant: {
    width: '10vw',
    position:'relative',
    zIndex: 1,
  },
  ten_plant: {
    width: '10vw',
    position:'relative',
    zIndex: 1,
  },
  plantContainer: {
  position: 'relative',

  },
  animatedItem: {
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`,

  },

  "@keyframes myEffect": {
    '0%': {
      transform: 'translateY(30%)',

    },
    '16%': {
      transform: 'translateY(-3%)',

    },
    '28%': {
      transform: 'translateY(5%)',

    },
    '44%': {
      transform: 'translateY(-2%)'
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
        <div className={classes.plantContainer}>
          {/* <img className={clsx(classes.plant,
            {[classes.animatedItem]: start}
          )} src="https://meowtivate.s3-us-west-2.amazonaws.com/10plant.png" alt="plant"/> */}

          <img className={clsx(classes.plant,
            {[classes.animatedItem]: start}
          )} src="https://meowtivate.s3-us-west-2.amazonaws.com/20plant.png" alt="plant"/>

          {/* <img className={clsx(classes.plant,
            {[classes.animatedItem]: start}
          )} src="https://meowtivate.s3-us-west-2.amazonaws.com/30plant.png" alt="plant"/>

          <img className={clsx(classes.plant,
            {[classes.animatedItem]: start}
          )} src="https://meowtivate.s3-us-west-2.amazonaws.com/40plant.png" alt="plant"/>

          <img className={clsx(classes.plant,
            {[classes.animatedItem]: start}
          )} src="https://meowtivate.s3-us-west-2.amazonaws.com/50plant.png" alt="plant"/>

          <img className={clsx(classes.plant,
            {[classes.animatedItem]: start}
          )} src="https://meowtivate.s3-us-west-2.amazonaws.com/60plant.png" alt="plant"/>

          <img className={clsx(classes.plant,
            {[classes.animatedItem]: start}
          )} src="https://meowtivate.s3-us-west-2.amazonaws.com/70plant.png" alt="plant"/> */}

          {/* <img className={clsx(classes.plant,
            {[classes.animatedItem]: start}
          )} src="https://meowtivate.s3-us-west-2.amazonaws.com/80plant.png" alt="plant"/> */}

          {/* <img className={clsx(classes.plant,
            {[classes.animatedItem]: start}
          )} src="https://meowtivate.s3-us-west-2.amazonaws.com/90plant.png" alt="plant"/> */}

          <img className={classes.pot} src="https://meowtivate.s3-us-west-2.amazonaws.com/pot.png" alt="pot"/>
        </div>
          <Button onClick={() => setStart(true)}>start</Button>
      </article>
      {start && <Button onClick={() => setStart(false)}>reset</Button>}
    </>
  );
}