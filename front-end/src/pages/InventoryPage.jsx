import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InventoryItem from '../components/InventoryItem';
import NavBar from '../components/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
}));

export default function InventoryPage(props) {
  const classes = useStyles();
  const { state } = props;
  const inventory = state.inventory;
  console.log('userinven', inventory)

  return (
    <>
      <header>
        <NavBar/>
        <h1>my INVENTORY</h1>
      </header>
      <body className={classes.root}>
        <Grid container spacing={3}>
          {inventory.map((items) => {
            return (
              <InventoryItem 
              key={items.id}
              name={items.pot_name}
              image={items.image_url}
              description={items.description}
              isDefault={items.is_default}
              // style={props.style}
              />
            );
          })}
        </Grid>
      </body>
    </>
  );
}
