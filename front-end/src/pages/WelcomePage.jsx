import axios from "axios";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import EcoIcon from '@material-ui/icons/Eco';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '1.3em',
  },
  container: {
    display: 'inline-flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgb(201,188,200, 0.4)',
    borderRadius: '2rem',
    width: '80vw',
    paddingTop: '5em',
    paddingBottom: '5em',
    marginTop: '15vh'   
  },
  logo: {
    fontFamily: "itim",
    letterSpacing: "8px",
    fontSize: '5em',
    lineHeight: '0',
    color: '#5c5c5c'
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "6px",
    fontSize: '3em',
    color: 'grey',
    lineHeight: '0'
  },
  signUpButton: {
    fontFamily: "Varela Round",
    margin: '2rem',
    backgroundColor: '#ebcb8a',
    fontSize: '2em',
    '&:hover': {
      backgroundColor: '#ceba93',
    }
  },
  loginButton: {
    fontFamily: "Varela Round",
    margin: '2rem',
    fontSize: '2em',
    backgroundColor: '#a0cdca',
    '&:hover': {
      backgroundColor: '#78aca8',
    }
  },
}));

export default function WelcomePage(props) {
  let history = useHistory();

  const login = () => {
    axios.get("/api/login/1").then((res) => {
      // console.log(res);
      history.push("/dashboard");
    });
  };
  // const { state } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Welcome to </h2>
      <h1 className={classes.logo}>MEOWIVATE!</h1>
      <div>
        <Button
          className={classes.signUpButton}
          variant="contained"
          color="primary"
          component={Link}
          to="/register"
        >
          <EcoIcon className={classes.icon}/>
          Sign Up
        </Button>
        <Button
          className={classes.loginButton}
          variant="contained"
          color="secondary"
          component={Link}
          to="/login"
        >
        <LocalFloristIcon className={classes.icon}/>
          Login
        </Button>
      </div>
    </div>
  );
}
