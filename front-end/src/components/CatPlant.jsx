import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  pot: {
    display: 'block',
    width: '12vw',
    position:'absolute',
    bottom: '0px',
    left: 'calc(50% - 6vw)',
    zIndex: 2,
  },
  plant: {
    opacity: 0,
    width: '13vw',
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
      opacity: 0,

    },
    '16%': {
      transform: 'translateY(-3%)',
      opacity: 1,

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
  const { actions } = props;
  const [start, setStart] = React.useState(false);
  let timer;

  // Calculate percentage
  const totalAmount = actions.length;
  const totalCompleted = actions.filter(obj => obj.is_completed === true).length;
  const initial = ( totalCompleted / totalAmount ) * 100;
  const num = Math.floor(initial / 10) * 10;

  // const [percentage, setPercentage] = useState(initial);
  
  useEffect(() => {
    setStart(true);
    timer = setTimeout(() => setStart(false), 3000);
  }, [actions])

  useEffect(() => {
    return () => clearInterval(timer);
  }, [start])

  return (
      <div className={classes.plantContainer}>
        <img className={clsx(classes.plant,
          {[classes.animatedItem]: start}
        )} src={`https://meowtivate.s3-us-west-2.amazonaws.com/plants/${num}plant.png`} alt="plant" style={{opacity: 1}}/>
        <img className={classes.pot} src="https://meowtivate.s3-us-west-2.amazonaws.com/pot.png" alt="pot"/>
      </div>
);
}