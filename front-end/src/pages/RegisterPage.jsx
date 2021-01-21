import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Varela Round",
    "& > *": {
      margin: theme.spacing(1),
    },
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

export default function RegisterPage(props) {
  const classes = useStyles();
  const { state } = props;

  return (
    <div className="Register">
      <h1 className={classes.header}>Meowtivate!</h1>
      <h2 className={classes.header}>Register</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/dashboard"
        >
          Register
        </Button>
      </form>
    </div>
  );
}
