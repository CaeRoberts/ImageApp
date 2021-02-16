import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 50 },
    });

    this.setState({ images: response.data.results });
    // console.log(this.state.images);
  };

  savedImagesLoad = () => {
    this.setState({ images: localStorage.get("image-") });
    console.log(this.state.images);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          onSubmit={this.onSearchSubmit}
          onChange={true ? this.savedImagesLoad : false}
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
