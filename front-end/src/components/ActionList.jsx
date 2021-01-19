import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
<<<<<<< HEAD
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// import IconButton from "@material-ui/core/IconButton";
// import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
// import UnfoldMoreRoundedIcon from "@material-ui/icons/UnfoldMoreRounded";
=======
import IconButton from "@material-ui/core/IconButton";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import UnfoldMoreRoundedIcon from "@material-ui/icons/UnfoldMoreRounded";
import AddItemForm from "./AddItemForm";

import useVisualMode from "../hooks/useVisualMode";

const SHOW = "SHOW";
const EDIT = "EDIT";
const SAVING = "SAVING";
>>>>>>> c0690fdc9a79c9cccf9b057ec2486e54ad9905a4

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    fontFamily: 'Varela Round',
  }
}));

export default function ActionList(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // mode changes
  const { mode, transition, back } = useVisualMode(props.items ? SHOW : EDIT);
  // function edit(name, interviewer) {
  //   transition(SAVING);
  //   const interview = {
  //     student: name,
  //     interviewer,
  //   };
  //   props
  //     .editInterview(props.id, interview)
  //     .then(() => transition(SHOW))
  //     .catch((error) => transition(ERROR_SAVE, true));
  // }

  return (
<<<<<<< HEAD
    <List className={classes.item}>
=======
    <List className={classes.root}>
      <button onClick={() => transition(EDIT)}>Edit</button>

>>>>>>> c0690fdc9a79c9cccf9b057ec2486e54ad9905a4
      {props.items.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            className={classes.item}
            key={value}
            role={undefined}
            dense
            button
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value.action_name} />
<<<<<<< HEAD
            {/* if === edit
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="drag">
                <UnfoldMoreRoundedIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteRoundedIcon />
              </IconButton>
            </ListItemSecondaryAction> */}
=======
            {mode === EDIT && (
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="drag">
                  <UnfoldMoreRoundedIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteRoundedIcon />
                </IconButton>
              </ListItemSecondaryAction>
            )}
>>>>>>> c0690fdc9a79c9cccf9b057ec2486e54ad9905a4
          </ListItem>
        );
      })}
      {mode === EDIT && <AddItemForm />}
    </List>
  );
}
