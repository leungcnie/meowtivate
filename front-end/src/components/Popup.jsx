import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

export default function Popup(props) {
  const { handleClose, popupState, category } = props;
  const { open, type, actionID, actionName } = popupState;
  const listType = category === 1 ? "to-do" : "habit";

  // Making form a controlled component
  console.log("listType", listType);
  console.log("actionName", actionName);
  const [name, setName] = useState(actionName);
  console.log("name", name);

  // Prevent stale props by re-rendering when actionName changes in parent
  useEffect(() => {
    setName(actionName)
  }, [actionName])

  return (
    <div>
      { type === "Delete" ? (
              <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{type} {listType}?</DialogTitle>
              <DialogContent>
                {/* <DialogContentText>
                {actionID}
                </DialogContentText> */}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Delete
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
      ) : (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{type} a {listType}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            {actionID}
          </DialogContentText> */}
          <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      )}
    </div>
  );
}
