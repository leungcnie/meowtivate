import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import UnfoldMoreRoundedIcon from "@material-ui/icons/UnfoldMoreRounded";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import Popup from "./Popup";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "10vw",
    paddingRight: "10vw",
  },
  item: {
    fontFamily: "Varela Round",
  },
}));

export default function ActionList(props) {
  const { items, category } = props;
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);
  const [isEditable, setIsEditable] = useState(false);
  console.log("props.items in actionList", props.items);

  // Toggle between VIEW and EDIT modes
  const modeToggle = () => setIsEditable(!isEditable);

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

  // Popup state
  const [popupState, setPopupState] = useState({
    open: false,
    type: "",
    actionID: 0, // action_id for EDITING, otherwise 0 for ADDING
    actionName: "",
  });

  const handleClickOpen = (type, id, name) => {
    setPopupState((prev) => ({
      ...prev,
      open: true,
      type: type,
      actionID: id,
      actionName: name,
    }));
  };
  const handleClose = () => {
    setPopupState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <List className={classes.root}>
      {items.map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <ListItem
            key={value.id}
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
            <p>{value.id}</p>
            <ListItemText id={value.id} primary={value.action_name} />
            {isEditable && (
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="drag">
                  <UnfoldMoreRoundedIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteRoundedIcon
                    onClick={() =>
                      handleClickOpen("Delete", value.id, value.action_name)
                    }
                  />
                </IconButton>
                <IconButton edge="end" aria-label="edit">
                  <EditRoundedIcon
                    onClick={() =>
                      handleClickOpen("Edit", value.id, value.action_name)
                    }
                  />
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        );
      })}

      {isEditable ? (
        <>
          <IconButton>
            <AddCircleIcon onClick={() => handleClickOpen("Add", 0, "")} />
          </IconButton>
          <IconButton onClick={modeToggle}>
            <SaveRoundedIcon />
          </IconButton>
        </>
      ) : (
        <IconButton onClick={modeToggle}>
          <EditRoundedIcon />
        </IconButton>
      )}

      <Popup
        handleClose={handleClose}
        popupState={popupState}
        category={category}
      />
    </List>
  );
}
