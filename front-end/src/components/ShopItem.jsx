import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  pot: {
    flexGrow: 1,
    width: "7rem",
  },
  // card: {
  //   height: "24rem",
  //   minWidth: "12rem",
  //   paddingBottom: "1rem",
  //   paddingTop: "2rem",
  // },
  card: {
    backgroundColor: "rgb(255,255,255, 0.7)",
    padding: "3rem",
    borderRadius: "2rem",
    height: "24rem",
    width: "12rem",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    paddingRight: "0.5rem",
    fontFamily: "Itim",
    fontSize: "1.5em",
    color: "grey",
  },
  buyButton: {
    backgroundColor: "#e2568e",
    fontFamily: "Varela Round",
    marginLeft: "1rem",
    paddingLeft: "0.75em",
    paddingRight: "1em",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    color: "white",
    "&:hover": {
      backgroundColor: "#aa5879",
      color: "white",
    },
  },
  warning: {
    color: "indianred",
    fontFamily: "Itim",
    position: "relative",
    fontSize: "1.5em",
  },
  pot: {
    width: "8rem",
    position: "relative",
    bottom: 0,
    left: 0,
  },
}));

export default function ShopItem(props) {
  const classes = useStyles();
  const { addPot, id, price, coins, setCoins, inventory } = props;
  const [isSold, setIsSold] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const buyItem = (user_id, pot_id) => {
    setCoins((prev) => prev - price);
    setIsSold(true);
    addPot(user_id, pot_id);
  };

  // Build array of inventory pot_ids
  const potIDs = inventory.map((obj) => obj.pot_id);

  console.log(`Coin in pot ${id}:`, coins);
  // useEffect(() => {
  //   if (isSold) {
  //     setCoins(prev => prev - price)
  //   }
  // }, [isSold])

  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      alignItems={matches ? "flex-start" : "center"}
    >
      <article className={classes.card}>
        <header className="meow-item-header">
          <img
            className={classes.pot}
            src={props.image}
            alt={props.name}
            price={props.price}
            // style={props.style}
          />
          <h2 className="meow-item-header-name" style={{ color: "#5c5c5c" }}>
            {props.name}
          </h2>
        </header>
        <main className="meow-item-description">
          <p>{props.description}</p>
        </main>
        <footer className={classes.footer} style={{ lineHeight: "0.25em" }}>
          <h2 className={classes.price}>{props.price}</h2>
          <img
            className={classes.coin}
            src="https://meowtivate.s3-us-west-2.amazonaws.com/miscellaneous/meowcoin.png"
            alt="meowcoin"
            style={{ height: "2.5rem" }}
          />
          {price > coins ? (
            <Button className={classes.buyButton} variant="contained" disabled>
              <MonetizationOnRoundedIcon style={{ paddingRight: "0.25em" }} />
              BUY
            </Button>
          ) : potIDs.includes(id) ? (
            <Button className={classes.buyButton} variant="contained" disabled>
              <MonetizationOnRoundedIcon style={{ paddingRight: "0.25em" }} />
              BUY
            </Button>
          ) : (
            <Button
              className={classes.buyButton}
              variant="contained"
              color="secondary"
              onClick={() => buyItem(1, id)}
            >
              <MonetizationOnRoundedIcon style={{ paddingRight: "0.25em" }} />
              BUY
            </Button>
          )}
        </footer>

        {potIDs.includes(id) ? (
          <h2 className={classes.warning}>ALREADY IN INVENTORY</h2>
        ) : isSold ? (
          <h2 className={classes.warning}>ALREADY IN INVENTORY</h2>
        ) : (
          ""
        )}
      </article>
    </Grid>
  );
}
