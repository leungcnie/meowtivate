import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '10rem',
  },
  card: {
    minHeight: '22rem',
    minWidth: '12rem',
  }
}));


export default function ShopItem(props) {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={3}>
      <Card className={classes.card}>
        <CardContent>
          <header className="meow-item-header">
            <img
              className={classes.root}
              src={props.image}
              alt={props.name}
              price={props.price}
              style={props.style}
            />
            <h2 className="meow-item-header-name">{props.name}</h2>
          </header>
          <main className="meow-item-description">
            <p>{props.description}</p>
          </main>
          <footer className="meow-item-footer">
          </footer>
        </CardContent>
      </Card>
    </Grid>
  );
}
