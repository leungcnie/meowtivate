import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/NavBar';
import ShopItem from '../components/ShopItem';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
  icon: {
    fontSize: '8em',
    color: 'grey',
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "6px",
    color: 'grey',
    paddingBottom: '2em'

  },
}));

export default function ShopPage(props) {
  const classes = useStyles();
  const { state, coins, setCoins, addPot } = props;
  const { shop, inventory } = state;
  // console.log('shopInven', shop)
  
  return (
    <>
      <header>
        <NavBar/>
        <StorefrontRoundedIcon className={classes.icon}/>
        <h1 className={classes.header}>WELCOME TO THE SHOP!</h1>
      </header>
      <p>you have {coins} meowcoins</p>
      <body className={classes.root}>
        <Grid container spacing={3}>
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
