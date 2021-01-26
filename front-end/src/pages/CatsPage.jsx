import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GalleryContainer from "../components/GalleryContainer";
import NavBar from "../components/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
  const lockedCats = [];

  for (let cat of allCats) {
    // console.log('cat', String(cat.id))
    // console.log('unloked keys', Object.keys(unlockedCats))
    if (!Object.keys(unlockedCats).includes(String(cat.id - 1))) {
      lockedCats.push(cat);
    }
  }
  return lockedCats;
}

export default function CatsPage(props) {
  const { state } = props;
  const classes = useStyles();
  // console.log('UNLOCKED', state.unlocked);
  // console.log('ALLCATS', state.allCats);
  const allCatsArray = state.allCats;
  const unlockedCatsArray = state.unlocked;
  const lockedCatsArray = isLocked(allCatsArray, unlockedCatsArray);

  return (
    <div className="Cats">
      <NavBar />
      <header>
        <h1 className={classes.header}>my Collection</h1>
      </header>
      <section>
        <GalleryContainer
          items={state.unlocked}
          style={{ filter: "brightness(1)" }}
        />
        <GalleryContainer
          items={lockedCatsArray}
          style={{ filter: "brightness(0)", color: 'transparent'}}
        />
      </section>
    </div>
  );
}
