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
  },
}));

function isLocked (allCats, unlockedCats) {
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
  console.log('UNLOCKED', state.unlocked);
  console.log('ALLCATS', state.allCats);
  const allCatsArray = state.allCats;
  const unlockedCatsArray = state.unlocked;

  return (
    <>
    {console.log('LOCKED', isLocked(allCatsArray, unlockedCatsArray))}
    <div className="Cats">
      <NavBar />
      <header>
        <h2 className={classes.header}>my Collection</h2>
      </header>
      <GalleryContainer items={state.unlocked} />
      <header>
        <h2 className={classes.header}>All cats Collection</h2>
      </header>
      <GalleryContainer items={state.allCats} />
    </div>
    {/* <div className="Cats">
      <NavBar />
      <header>
        <h2 className={classes.header}>my Collection</h2>
      </header>
      <GalleryContainer items={state.unlocked} />
    </div> */}
    </>
  );
}
