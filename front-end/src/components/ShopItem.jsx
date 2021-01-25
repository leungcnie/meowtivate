import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
  const { addPot, id, price, coins, setCoins } = props;
  const [isSold, setIsSold] = useState(false);
  console.log("id in shopItem", id);

  const buyItem = (user_id, pot_id) => {
    setIsSold(true);
    addPot(user_id, pot_id);
  }

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
            <p>{props.price} Meowcoins</p>
          </footer>
          {price > coins ? (
            <Button 
              variant="contained" 
              disabled>
              BUY
          </Button>
          ) : (
            <Button 
              variant="contained" 
              color="secondary"
              onClick={() => buyItem(1, id)}>
              BUY
            </Button>
          )}

          {isSold && (
            <p>SOLD OUT</p>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
