import React from "react";

class LikeButton extends React.Component {
  state = { savedImages: [] };

  // onHeartClick = (e) => {
  //   e.preventDefault();

  //   this.props.onClick(this.state.savedImages);
  // };

  render() {
    return (
      <div
        // onClick={this.onHeartClick, (e) => this.setState({savedImages: e.target.})}
        className="ui labeled button"
        tabindex="0"
      >
        <div className="ui red button">
          <i className="heart icon"></i>
        </div>
        <a className="ui basic red left pointing label">Save Image</a>
      </div>
    );
  }
}

export default LikeButton;
