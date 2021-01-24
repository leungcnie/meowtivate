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
  const { state, coins, setCoins } = props;
  const shopInventory = state.shopInventory;
  // console.log('shopInven', shopInventory)
  
  return (
    <>
      <header>
        <NavBar/>
        <h1>Welcome to the Shop!</h1>
      </header>
      <body className={classes.root}>
        <Grid container spacing={3}>
          {shopInventory.map((items) => {
            return (
              <ShopItem 
              key={items.id}
              name={items.pot_name}
              image={items.image_url}
              description={items.description}
              price={items.price}
              // style={props.style}
              />
            );
          })}
        </Grid>
      </body>
    </>
  );
}
