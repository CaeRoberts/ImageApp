import React from "react";

class DeleteButton extends React.Component {
  render() {
    return (
      <div className="ui labeled button" tabIndex="0">
        <div className="ui red button">
          <i className="heart icon"></i>
        </div>
        <a className="ui basic red left pointing label">Remove Image</a>
      </div>
    );
  }
}

export default DeleteButton;
