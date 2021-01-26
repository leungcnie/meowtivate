import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    [theme.breakpoints.down("sm")]: {
      Width: "80vw",
    },
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "6px",
  },
}));

export default function AccountPage(props) {
  // const user = props.state.account[0];
  // console.log("AccountPage", user);
  // const { username, email } = user;

  const classes = useStyles();

  // Toggle between VIEW and EDIT modes
  const [isEditable, setIsEditable] = useState(false);
  const modeToggle = () => setIsEditable(!isEditable);

  return (
    <div className={classes.root}>
      <NavBar />
      <header>
        <h2 className={classes.header}>my Account</h2>
      </header>
      <Card>
        {props && (
          <CardContent>
            <h5>Username: Pawthos</h5>
            <h5>Email: pawthos@gmail.com</h5>
            <h5>Password: ********* </h5>{" "}
          </CardContent>
        )}
      </Card>
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
