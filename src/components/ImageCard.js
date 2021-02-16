import React from "react";
import LikeButton from "./LikeButton";
import "./ImageCard.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    console.log(this.props.image.id);
  }

  handleLikeInput = () => {
    // const likedImage = {
    //   reference: this.imageRef,
    //   description: this.props.image.description,
    //   source: this.props.image.urls.regular,
    // };
    localStorage.setItem(
      `image-${this.props.image.id}`,
      // `${JSON.stringify(likedImage)}`
      `${this.props.image.urls.regular}`
    );
    console.log(`Image Like Button clicked`);
  };

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 15) + 5;

    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div
        className="ui segment"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <img ref={this.imageRef} alt={description} src={urls.regular} />
        <div onClick={this.handleLikeInput}>
          <LikeButton />
        </div>
      </div>
    );
  }
}

export default ImageCard;
