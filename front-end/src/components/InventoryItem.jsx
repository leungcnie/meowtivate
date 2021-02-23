import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  pot: {
    height: "8rem",
    position: "relative",
    bottom: 0,
    left: 0,
  },
  card: {
    height: "18rem",
    minwidth: "8rem",
    paddingBottom: "1rem",
    paddingTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      height: "20rem",
    },
  },
  isDefault: {
    position: "relative",
    bottom: "14rem",
    transform: "rotate(-15deg)",
    color: "indianred",
    fontFamily: "Itim",
    fontSize: "3em",
  },
  article: {
    backgroundColor: "rgb(255,255,255, 0.7)",
    padding: "3rem",
    borderRadius: "2rem",
    minHeight: "3vh",
    height: "18rem",
    width: '14rem',
  },
}));

export default function InventoryItem(props) {
  const classes = useStyles();
  const { setDefaultPot, pot_id } = props;

  return (
    <Grid item xs={6} sm={4} md={3} >
      <article className={classes.article} onClick={() => setDefaultPot(1, pot_id)}>
          <header className="meow-item-header">
            <img
              className={classes.pot}
              src={props.image}
              alt={props.name}
              style={{ paddingTop: "2rem" }}
            />
            <h2 className="meow-item-header-name">{props.name}</h2>
          </header>
          <main className="meow-item-description">
            <p className={classes.footer}>{props.description}</p>
          </main>
          <footer className="meow-item-footer">
            {props.isDefault && <h1 className={classes.isDefault}>SELECTED</h1>}
          </footer>
      </article>
    </Grid>
  );
}
