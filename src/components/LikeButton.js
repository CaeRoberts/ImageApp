import React from "react";

class LikeButton extends React.Component {
  render() {
    return (
      <div className="ui labeled button" tabIndex="0">
        <div className="ui red button">
          <i className="heart icon"></i>
        </div>
        <a className="ui basic red left pointing label">Save Image</a>
      </div>
    );
  }
}

export default LikeButton;
