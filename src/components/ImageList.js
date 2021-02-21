import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    Object.assign(image, { url: image.urls.regular });

    // console.log(image);

    return (
      <ImageCard
        key={image.id}
        image={image}
        onClickSave={props.onClickSave}
        src={image.url}
      />
    );
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
