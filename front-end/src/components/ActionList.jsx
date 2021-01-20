import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import UnfoldMoreRoundedIcon from "@material-ui/icons/UnfoldMoreRounded";
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import Popup from "./Popup";
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "10vw",
    paddingRight: "10vw",
  },
  item: {
    fontFamily: 'Varela Round',
  },
}));

export default function ActionList(props) {
  const { items, listType } = props;
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);
  const [isEditable, setIsEditable] = useState(false);

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
  // const [open, setOpen] = useState(false);
  // const [popupType, setPopupType] = useState(""); // "", "add", or "edit"
  const [popupState, setPopupState] = useState({
    open: false,
    type: ""
  });

  const handleClickOpen = (type) => {
    // setOpen(true);
    // setPopupType(type);
    setPopupState((prev) => ({
      ...prev,
      open: true,
      type: type
    }))
  };
  const handleClose = () => {
    // setOpen(false);
    setPopupState((prev) => ({
      ...prev,
      open: false
    }))
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
            <ListItemText id={labelId} primary={value.action_name} />
            {isEditable && (
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="drag">
                  <UnfoldMoreRoundedIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteRoundedIcon />
                </IconButton>
                <IconButton edge="end" aria-label="edit">
                  <EditRoundedIcon onClick={() => handleClickOpen("Edit")}/>
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        );
      })}

      {isEditable ? 
      (<>
      <IconButton>
        <AddCircleIcon onClick={() => handleClickOpen("Add")} />
      </IconButton>
      <IconButton onClick={modeToggle}>
        <SaveRoundedIcon/>
      </IconButton>
      </>) :
      (<IconButton onClick={modeToggle}>
            <EditRoundedIcon/>
      </IconButton>) }

    <Popup 
      handleClose={handleClose} 
      open={popupState.open} 
      type={popupState.type} 
      listType={listType}
    />

    </List>
  );
}
