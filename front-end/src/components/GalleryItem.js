import React from "react";
import Grid from '@material-ui/core/Grid';

export default function GalleryItem(props) {
  return (
    <Grid item xs={6} sm={3}>
      <article className="meow-item">
        <header className="meow-item-header">
          <img className="meow-item-header-avatar" src={props.avatar} alt="" width="200px" />
          <h2 className="meow-item-header-name">{props.name}</h2>
        </header>
        <main className="meow-item-description">
          <p>{props.description}</p>
        </main>
        <footer className="meow-item-footer">{props.date}</footer>
      </article>
    </Grid>
  );
};