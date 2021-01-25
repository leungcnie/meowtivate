import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/NavBar';
import ShopItem from '../components/ShopItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
}));

export default function ShopPage(props) {
  const classes = useStyles();
  const { state, coins, setCoins, addPot } = props;
  const shop = state.shop;
  // console.log('shopInven', shop)
  
  return (
    <>
      <header>
        <NavBar/>
        <h1>Welcome to the Shop!</h1>
      </header>
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
              // style={props.style}
              />
            );
          })}
        </Grid>
      </body>
    </>
  );
}
