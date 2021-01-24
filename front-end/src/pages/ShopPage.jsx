import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

  return (
    <>
      <header>
        <NavBar/>
        <h1>Welcome to the Shop!</h1>
      </header>
      <body className={classes.root}>
        <Grid container spacing={3}>
          {props.items.map((items) => {
            return (
              <ShopItem 
              key={items.id}
              name={items.cat_name}
              avatar={items.image_url}
              description={items.description}
              date={items.date_unlocked}
              style={props.style}
              />
            );
          })}
        </Grid>
      </body>
    </>
  );
}
