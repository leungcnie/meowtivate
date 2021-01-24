import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GalleryItem from "./GalleryItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
}));

export default function GalleryContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {props.items.map((items) => {
          return (
            <GalleryItem
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
    </div>
  );
}
