import React, { useState, useEffect } from "react";
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
  item: {
    fontFamily: "Varela Round",
  },
}));

export default function ActionList(props) {
  const { items, category, actionFunctions, initChecked } = props;
  const { 
    deleteAction, 
    addAction, 
    editActionName, 
    editCompletedState } = actionFunctions; // State changing funcs from useApplicationData
  const classes = useStyles();

  console.log("checked in ActionList", initChecked);

  // Toggle between VIEW and EDIT modes
  const [isEditable, setIsEditable] = useState(false);
  const modeToggle = () => setIsEditable(!isEditable);

  // Toggle checkbox
  // checked is an array of numbers that represent checked actionIDs
  const [checked, setChecked] = useState(initChecked);
  
  const handleToggle = (value, evt) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) { // if value isn't in checked, add it
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1); // else remove from checked
    }

    setChecked(newChecked);
    editCompletedState(value, evt.target.checked); // Update state
  };

  // Popup state
  const [popupState, setPopupState] = useState({
    open: false,
    type: "",
    actionID: 0, // action_id for EDITING, otherwise 0 for ADDING
    actionName: "",
  });

  // Popup functions
  const handleClickOpen = (type, id, name) => {
    setPopupState((prev) => ({
      ...prev,
      open: true,
      type: type,
      actionID: id,
      actionName: name,
    }));
  };

  const cancel = () => {
    setPopupState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const confirmDelete = (actionID) => {
    deleteAction(actionID);
    setPopupState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const confirmAdd = (name, categoryID) => {
    addAction(name, categoryID);
    setPopupState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const confirmEdit = (actionID, name) => {
    editActionName(actionID, name);
    setPopupState((prev) => ({
      ...prev,
      open: false,
    }));
  }

  return (
    <List className={classes.root}>
      {items.sort(function(a, b) {
  return a.id - b.id;
}).map((obj) => {
        const labelId = `checkbox-list-label-${obj.id}`;
        return (
          <ListItem
            key={obj.id}
            role={undefined}
            dense
            button
            onClick={(evt) => handleToggle(obj.id, evt)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={obj.is_completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={obj.action_name} />
            {isEditable && (
              <ListItemSecondaryAction>
                {/* <IconButton edge="end" aria-label="drag">
                  <UnfoldMoreRoundedIcon />
                </IconButton> */}
                <IconButton edge="end" aria-label="delete">
                  <DeleteRoundedIcon
                    onClick={() =>
                      handleClickOpen("Delete", obj.id, obj.action_name)
                    }
                  />
                </IconButton>
                <IconButton edge="end" aria-label="edit">
                  <EditRoundedIcon
                    onClick={() =>
                      handleClickOpen("Edit", obj.id, obj.action_name)
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
        cancel={cancel}
        confirmDelete={confirmDelete}
        confirmAdd={confirmAdd}
        confirmEdit={confirmEdit}
        popupState={popupState}
        category={category}
      />
    </List>
  );
}
