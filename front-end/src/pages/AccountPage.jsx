import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import TextField from "@material-ui/core/TextField";
import { Widgets } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'inline-flex',
    flexDirection: 'column',
    width: '40vw',
    justifyContent: 'center',
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "6px",
    color: 'grey',
    lineHeight: 0,
    paddingBottom:'1rem',
    paddingTop: '2rem',
    fontSize: '2em'
  },
  infoCard: {
    color: '#5c5c5c',
    fontSize: '1.5em',
    backgroundColor: 'rgb(201,188,200, 0.4)',
    borderRadius: '2rem',
    padding: '2em',
    marginTop: '8vh',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  icon:{
    fontSize: '2em',
    padding: '0.25rem',
  }
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
    <>
      <header>
        <NavBar />
        <h1 className={classes.header}>my Account</h1>
      </header>

      <section>
        <article className={classes.container}>
          {props && (
            <div className={classes.infoCard}>
              <p>Username: Pawthos</p>
              <p>Email: pawthos@gmail.com</p>
              <p>Password: ********* </p>{" "}
            </div>
          )}
        </article>
        <article>
          <IconButton onClick={modeToggle}>
            <EditRoundedIcon className={classes.icon}/>
          </IconButton>
        </article>
        {isEditable && (
          <div>
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
      </section>
    </>
  );
}
