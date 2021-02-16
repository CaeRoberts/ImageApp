import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  grabSavedImages = () => {
    // localStorage.filter("image-").get();
    this.props.onChange(true);
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
        <br></br>
        <button className="ui button" onClick={this.grabSavedImages}>
          Saved Images
        </button>
      </div>
    );
  }
}

export default SearchBar;
