import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Varela Round",
    '& > *': {
      margin: theme.spacing(3),
    },
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
    fontSize: '3em',
    color: 'antiquewhite',
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "6px",
    color: 'grey',
  },
  loginButton: {
    fontFamily: "Varela Round",
    margin: '2rem',
    fontSize: '1.5em',
    backgroundColor: '#a0cdca',
    '&:hover': {
      backgroundColor: '#78aca8',
    }
  },
}));

export default function LoginPage(props) {
  const classes = useStyles();
  const { state } = props;

  return (
    <div className={classes.container}>
      <h2 className={classes.logo}>MEOWTIVATE</h2>
      <h2 className={classes.header}>LOGIN</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="outlined-basic" label="Username" variant="outlined" value="Pawthos" />
      </div>
      <div>
      <TextField id="outlined-basic" label="Password" variant="outlined" value="****"/>
      </div>
      <Button
        className={classes.loginButton}
        variant="contained" 
        color="secondary"
        component={Link}
        to='/lists'>
      Login
      </Button>
    </form>
    </div>
  )
};