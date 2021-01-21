import axios from "axios";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Varela Round",
  },
  logo: {
    fontFamily: "itim",
    letterSpacing: "8px",
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "6px",
  },
  button: {
    fontFamily: "Varela Round",
    textDecoration: "none",
  },
}));

export default function WelcomePage(props) {
  let history = useHistory();

  const login = () => {
    axios.get("/api/login/1").then((res) => {
      console.log(res);
      history.push("/dashboard");
    });
  };
  // const { state } = props;
  const classes = useStyles();

  return (
    <div className="Welcome">
      <h2 className={classes.header}>Welcome to </h2>
      <h1 className={classes.logo}>Meowtivate!</h1>
      <div>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          component={Link}
          to="/register"
        >
          Sign Up
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          component={Link}
          to="/login"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
