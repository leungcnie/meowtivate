import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Varela Round",

    "& > *": {
      margin: theme.spacing(3),
    },
  },
  container: {
    display: "inline-flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgb(201,188,200, 0.4)",
    borderRadius: "2rem",
    width: "80vw",
    [theme.breakpoints.down("xs")]: {
      height: "60vh",
    },
    paddingTop: "5em",
    paddingBottom: "5em",
    marginTop: "15vh",
  },
  logo: {
    fontFamily: "itim",
    letterSpacing: "8px",
    fontSize: "4em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em",
    },
    color: "antiquewhite",
    lineHeight: "0",
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "6px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em",
    },
    color: "grey",
  },
  loginButton: {
    fontFamily: "Varela Round",

    backgroundColor: "#a0cdca",
    "&:hover": {
      backgroundColor: "#78aca8",
    },
  },
  icon: {
    color: "white",
    fontSize: "2.7em",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
}));

export default function RegisterPage(props) {
  // const isActive = useMediaQuery("(min-width: 480px)");
  const classes = useStyles();
  // const { state } = props;

  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.container}>
      <h1 className={classes.logo}>MEOWTIVATE</h1>
      <h2 className={classes.header}>REGISTER</h2>
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
          className={classes.loginButton}
          variant="contained"
          component={Link}
          to="/dashboard"
        >
          <DoubleArrowRoundedIcon className={classes.icon} />
        </Button>
      </form>
    </div>
  );
}
