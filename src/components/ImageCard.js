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
    // console.log(this.props.image);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 15) + 5;

    this.setState({ spans });
  };
  render() {
    // console.log(this.props.image);
    const { description, url } = this.props.image;
    return (
      <div
        className="ui segment"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <img ref={this.imageRef} alt={description} src={url} />
        <div
          onClick={() =>
            this.props.onClickSave({
              id: this.props.image.id,
              url: this.props.image.url,
              description: this.props.image.description,
            })
          }
        >
          <LikeButton />
        </div>
      </div>
    );
  }
}

export default ImageCard;
