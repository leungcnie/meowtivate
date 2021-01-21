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
import useApplicationData from "../hooks/useApplicationData";

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
  const { deleteAction } = useApplicationData();
  const { items, category } = props;
  const classes = useStyles();

  // Toggle between VIEW and EDIT modes
  const [isEditable, setIsEditable] = useState(false);
  const modeToggle = () => setIsEditable(!isEditable);

  // Toggle checkbox
  // checked is an array of numbers that represent checked actionIDs
  const [checked, setChecked] = useState([]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      // check if value is in checked
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1); // remove from checked
    }

    setChecked(newChecked);
  };

  console.log("checked", checked);
  // Logging value of checked whenever it's updated
  // useEffect(() => {
  //   console.log("what's checked:", checked);
  // }, [checked])

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

  const popupDelete = (actionID) => {
    deleteAction(actionID);
    setPopupState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const cancel = () => {
    setPopupState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <List className={classes.root}>
      {items.map((obj) => {
        const labelId = `checkbox-list-label-${obj.id}`;
        return (
          <ListItem
            key={obj.id}
            role={undefined}
            dense
            button
            onClick={handleToggle(obj.id)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(obj.id) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={obj.action_name} />
            {isEditable && (
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="drag">
                  <UnfoldMoreRoundedIcon />
                </IconButton>
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
        popupDelete={popupDelete}
        popupState={popupState}
        category={category}
      />
    </List>
  );
}
