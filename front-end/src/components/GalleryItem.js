import React from "react";

const GalleryItem = (props) => {
  return (
    <article className="meow-item">
      <header className="meow-item-header">
        <img className="meow-item-header-avatar" src={props.avatar} alt="" />
        <h2 className="meow-item-header-name">{props.name}</h2>
      </header>
      <main className="meow-item-description">
        <p>{props.description}</p>
      </main>
      <footer className="meow-item-footer">{props.date}</footer>
    </article>
  );
};

export default GalleryItem;
