import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";
import IconButton from "@material-ui/core/IconButton";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "6px",
  },
}));

export default function AccountPage(props) {
  const user = props.state.account[0];
  console.log("AccountPage", user);
  const { username, email } = user;

  const classes = useStyles();

  // Toggle between VIEW and EDIT modes
  const [isEditable, setIsEditable] = useState(false);
  const modeToggle = () => setIsEditable(!isEditable);

  return (
    <div className="Account">
      <NavBar />
      <header>
        <h2 className={classes.header}>my Account</h2>
      </header>
      <h5>Username: {username}</h5>
      <h5>Email: {email}</h5>
      <h5>Password: ********* </h5>
      <IconButton onClick={modeToggle}>
        <EditRoundedIcon />
      </IconButton>
      {isEditable && (
        <div>
          Hello
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </div>
            <div>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
            <IconButton>
              <SaveRoundedIcon onClick={modeToggle} />
            </IconButton>
          </form>
        </div>
      )}
    </div>
  );
}
