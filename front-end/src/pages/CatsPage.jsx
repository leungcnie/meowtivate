import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GalleryContainer from '../components/GalleryContainer';
import NavBar from '../components/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    fontFamily: 'Varela Round',
    letterSpacing: "6px"
  },
}));

export default function CatsPage(props) {
  const { state } = props;
  const classes = useStyles();

  return (
    <div className="Cats">
      <NavBar/>
      <header>
        <h2 className={classes.header}>my Collection</h2>
      </header>
      <GalleryContainer items={state.collections}/>
    </div>
  )
};