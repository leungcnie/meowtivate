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
    paddingTop: '2rem',
    paddingBottom: '2rem',
    fontSize: '2em'
  },
  infoCard: {
    color: '#5c5c5c',
    fontSize: '1.5em',
    backgroundColor: 'rgb(201,188,200, 0.4)',
    borderRadius: '2rem',
    padding: '2em',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  icon:{
    fontSize: '2em',
    padding: '0.25rem',
  },
  form: {
    padding: '1rem',
    display: 'inline-flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '30vw',
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
          <section>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                style={{margin: '0.5rem'}}
              />
              <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                style={{margin: '0.5rem'}}/>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                style={{margin: '0.5rem'}}/>
              <div>
                <IconButton>
                  <SaveRoundedIcon className={classes.icon} onClick={modeToggle} />
                </IconButton>
              </div>
            </form>
          </section>
        )}
      </section>
    </>
  );
}
