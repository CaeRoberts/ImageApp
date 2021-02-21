import React from "react";
import "./ImageList.css";
import SavedImageCard from "./SavedImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    // console.log(images);
    return (
      <SavedImageCard
        alt={image.description}
        key={image.id}
        image={image}
        src={image.url}
        onClickDelete={props.onClickDelete}
      />

      // <img
      //   alt={image.description}
      //   key={image.id}
      //   src={image.url}
      //   style={{ width: "100px" }}
      // />
    );
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
