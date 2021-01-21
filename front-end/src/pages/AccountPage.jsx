import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";
import IconButton from "@material-ui/core/IconButton";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";

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

  return (
    <div className="Account">
      <NavBar />
      <header>
        <h2 className={classes.header}>my Account</h2>
      </header>
      <h5>Username: {username}</h5>
      <h5>Email: {email}</h5>
      <h5>Password: ********* </h5>
      <IconButton>
        <EditRoundedIcon />
      </IconButton>
      <IconButton>
        <SaveRoundedIcon />
      </IconButton>
    </div>
  );
}
