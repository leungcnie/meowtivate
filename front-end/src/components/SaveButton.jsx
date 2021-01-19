import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import classNames from 'classnames';

const useStyles = makeStyles({
  buttonStyle: props => {
    return {
      color: props.confirm? "black" : "red",
    };
  },
  buttonBg: {
    backgroundColor: "pink"
  }
  // buttonStyle: {
  //   color: props => (props.confirm ? "blue" : "red")
  // }
});

export default function SaveButton(props) {
  const classes = useStyles(props);

  return (
  <Button 
    className={classNames(classes.buttonStyle, classes.buttonBg)}>
    Save
  </Button>
  )
}