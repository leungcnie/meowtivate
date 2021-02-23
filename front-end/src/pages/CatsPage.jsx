import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GalleryContainer from "../components/GalleryContainer";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '10vw',
    marginRight: '10vw',
    marginBottom: '10vh'
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
  locked: {
    filter: "brightness(0)",
  },
}));

function isLocked(allCats, unlockedCats) {
  const unlockedIDs = unlockedCats.map(obj => obj.id);
  const lockedCats = allCats.filter(obj => !unlockedIDs.includes(obj.id));
  return lockedCats;
}

export default function CatsPage(props) {
  const { state } = props;
  const classes = useStyles();

  const allCatsArray = state.allCats;
  const unlockedCatsArray = state.unlocked;
  const locked = isLocked(allCatsArray, unlockedCatsArray);

  // Change locked cats names to ??? and no description
  const lockedCatsArray = locked.map(obj => {
    obj.cat_name = "???";
    obj.description = "";
    return obj;
  })

  return (
    <div className="Cats">
      <NavBar />
      <h1 className={classes.header}>my Collection</h1>
      <section className={classes.root}>
        <GalleryContainer
          items={state.unlocked}
          style={{ filter: "brightness(1)" }}
        />
        <GalleryContainer
          items={lockedCatsArray}
          style={{ filter: "brightness(0)" }}/>
      </section>
    </div>
  );
}
