import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar";
import ShopItem from "../components/ShopItem";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
  icon: {
    fontSize: "8em",
    color: "grey",
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "6px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      letterSpacing: "2px",
    },
    color: "grey",
    lineHeight: 0,
    paddingBottom: "1rem",
  },
  wallet: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "antiquewhite",
    width: "7rem",
    justifyContent: "space-around",
    padding: "0.75em",
    borderRadius: "1.5rem",
    fontFamily: "Itim",
    color: "grey",
    /* height: 5rem; */
  },
  walletContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "3rem",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function ShopPage(props) {
  const classes = useStyles();
  const { state, coins, setCoins, addPot } = props;
  const { shop, inventory } = state;

  return (
    <>
      <header>
        <NavBar />
        <div className={classes.walletContainer}>
          <div className={classes.wallet}>
            <h2>{coins}</h2>
            <img
              src="https://meowtivate.s3-us-west-2.amazonaws.com/miscellaneous/meowcoin.png"
              alt="meowcoin"
              style={{ height: "3rem" }}
            />
          </div>
        </div>
        <StorefrontRoundedIcon className={classes.icon} />
        <h1 className={classes.header}>WELCOME TO THE SHOP!</h1>
      </header>
      <body className={classes.root}>
        <Grid container spacing={4}>
          {shop.map((item) => {
            return (
              <ShopItem
                key={item.id}
                id={item.id}
                name={item.pot_name}
                image={item.image_url}
                description={item.description}
                price={item.price}
                addPot={addPot}
                coins={coins}
                setCoins={setCoins}
                inventory={inventory}
              />
            );
          })}
        </Grid>
      </body>
    </>
  );
}
