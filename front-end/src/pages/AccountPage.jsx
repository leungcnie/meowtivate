import { makeStyles } from "@material-ui/core/styles";
import NavBar from '../components/NavBar';
import IconButton from "@material-ui/core/IconButton";
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  header: {
    fontFamily: 'Varela Round',
    letterSpacing: "6px"
  },
}));

export default function AccountPage(props) {
  const { state } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar/>
      <header>
        <h2 className={classes.header}>my Account</h2>
      </header>
      <Card>
        <CardContent>
        <h4>USERNAME: Meow</h4>
        <h4>EMAIL: Meow@hotmail.com</h4>
        <h4>PASSWORD: ********* </h4>
        </CardContent>
      </Card>
      <IconButton>
        <EditRoundedIcon/>
      </IconButton>
      <IconButton>
        <SaveRoundedIcon/>
      </IconButton>
    </div>
  )
};