import React from "react";
import GalleryItem from "./GalleryItem";

export const Gallery = (props) => {
  const items = props.items.map((items) => {
    return (
      <GalleryItem
        key={items.id}
        name={items.name}
        avatar={items.avatar}
        description={items.description}
        date={items.date}
      />
    );
  });

  return <main>{items}</main>;
};
