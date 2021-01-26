import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //   width: "7rem",
    //   alignItems: "center",
    // },
    // card: {
    //   height: "24rem",
    //   minWidth: "15rem",
    //   paddingBottom: "1rem",
    //   paddingTop: "1rem",
    //   paddingLeft: "1rem",
    //   paddingRight: "1rem",

    //   // backgroundColor: 'darkkhaki',
    // },
    // footer: {
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
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
    fontSize: "3vw",
  },
}));

export default function InventoryItem(props) {
  const classes = useStyles();
  const { setDefaultPot, pot_id } = props;
  console.log("id in InventoryItem", pot_id);

  return (
    <Grid item xs={6} sm={4}>
      <Card onClick={() => setDefaultPot(1, pot_id)}>
        <CardContent className={classes.card}>
          <header className="meow-item-header">
            <img
              className={classes.pot}
              src={props.image}
              alt={props.name}
              style={{ paddingTop: "2rem" }}
            />
            <h2 className="meow-item-header-name">{props.name}</h2>
          </header>
          <main
            className="meow-item-description"
            style={{ paddingRight: "2rem" }}
          >
            <p className={classes.footer}>{props.description}</p>
          </main>
          <footer className="meow-item-footer">
            {props.isDefault && <h1 className={classes.isDefault}>SELECTED</h1>}
          </footer>
        </CardContent>
      </Card>
    </Grid>
  );
}
