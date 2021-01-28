import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import EcoIcon from "@material-ui/icons/Eco";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "1.3em",
  },
  container: {
    display: "inline-flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgb(201,188,200, 0.4)",
    borderRadius: "2rem",
    width: "40vw",
    padding: "4em",
    marginTop: "8vh",
  },
  logo: {
    fontFamily: "Itim",
    letterSpacing: "8px",
    fontSize: "3em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
    lineHeight: "0",
    color: "#5c5c5c",
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "6px",
    fontSize: "2em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
    color: "grey",
    lineHeight: "0",
  },
  signUpButton: {
    fontFamily: "Varela Round",
    margin: "2rem",
    backgroundColor: "#ebcb8a",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
    fontSize: "1.5em",
    "&:hover": {
      backgroundColor: "#ceba93",
    },
  },
  loginButton: {
    fontFamily: "Varela Round",
    margin: "2rem",
    fontSize: "1.5em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
    backgroundColor: "#a0cdca",
    "&:hover": {
      backgroundColor: "#78aca8",
    },
  },
  blurb: {
    paddingTop: '2em',
    color: 'grey',
    width: '30vw',
    letterSpacing: '4px',
  },
  blurbContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  catgif: {
    height: '14rem',
  }
}));

export default function WelcomePage(props) {
  // const { state } = props;
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Welcome to </h2>
      <h1 className={classes.logo}>MEOWIVATE!</h1>
      <div>
        <img className={classes.catgif} src="https://meowtivate.s3-us-west-2.amazonaws.com/miscellaneous/animated_catplant.gif" alt="animated-catplant"/>
      </div>
      <div className={classes.blurbContainer}>
      <p className={classes.blurb}>Stay meowtivated to finish your work with this whimsical to-do and habit tracker app, while collect herbaceous feline friends along the way</p>
      </div>
      <div>
        <Button
          className={classes.signUpButton}
          variant="contained"
          color="primary"
          component={Link}
          to="/register"
        >
          <EcoIcon className={classes.icon} />
          Sign Up
        </Button>
        <Button
          className={classes.loginButton}
          variant="contained"
          color="secondary"
          component={Link}
          to="/login"
        >
          <LocalFloristIcon className={classes.icon} />
          Login
        </Button>
      </div>

    </div>
  );
}
