import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: "25rem",
    minWidth: "17rem",
    backgroundColor: "#dfd2cd",
    [theme.breakpoints.down("md")]: {
      height: "20rem",
      minWidth: "9rem",
    },
  },
  article: {
    backgroundColor: "rgb(201,188,200, 0.4)",
    padding: "3rem",
    borderRadius: "2rem",
    minHeight: "3vh",
  },
  catImg: {
    height: "14rem",
    [theme.breakpoints.down("md")]: {
      height: "10rem",
    },
  },
  description: {
    color: "#5c5c5c",
    [theme.breakpoints.down("md")]: {
      height: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
}));

export default function GalleryItem(props) {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={4} md={3}>
      <article className={classes.article}>
          <header className="meow-item-header">
            <img
              className={classes.catImg}
              src={props.avatar}
              alt={props.name}
              style={props.style}
            />
            <h2 className={classes.description} style={props.style}>{props.name}</h2>
          </header>
          <main className={classes.description} style={props.style}>
            <p>{props.description}</p>
          </main>
          <footer className="meow-item-footer">
            {/* {props.date.substring(0, 10)} */}
          </footer>
      </article>
    </Grid>
  );
}
