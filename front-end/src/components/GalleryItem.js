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
  },
  catImg: {
    height: '14rem',
  },
  description: {
    color: '#5c5c5c',
  }
}));

export default function GalleryItem(props) {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Card className={classes.card}>
        <CardContent>
          <header className="meow-item-header">
            <img
              className={classes.catImg}
              src={props.avatar}
              alt={props.name}
              style={props.style}
            />
            <h2 className={classes.description}>{props.name}</h2>
          </header>
          <main className={classes.description}>
            <p>{props.description}</p>
          </main>
          <footer className="meow-item-footer">
            {/* {props.date.substring(0, 10)} */}
          </footer>
        </CardContent>
      </Card>
    </Grid>
  );
}
