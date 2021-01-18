import React from "react";
import GalleryItem from "./GalleryItem";

export const Gallery = (props) => {
  console.log("whats props.items:", props.items);
  const items = props.items.map((items) => {
    return (
      <GalleryItem
        key={items.id}
        name={items.cat_name}
        avatar={items.image_url}
        description={items.description}
        date={items.date_unlocked}
      />
    );
  });

  return <main>{items}</main>;
};
