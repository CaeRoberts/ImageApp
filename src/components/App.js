import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "./App.css";
import { getAll, removeOne } from "../savedImagesRepository";
import SavedImagesList from "./SavedImagesList";
import { addOne } from "../savedImagesRepository";

class App extends React.Component {
  state = { images: [], savedImages: [] };

  handleLikeInput = (image) => {
    const myNewImage = {
      id: image.id,
      url: image.url,
    };

    // The first setState here needs to change
    addOne(myNewImage);
    this.setState({
      images: [...this.state.images].filter((i) => i.id !== myNewImage.id),
    });
    this.setState({
      savedImages: [...this.state.savedImages, myNewImage],
    });
  };

  handleDelete = (image) => {
    removeOne(image.id);
    this.grabSavedImages();
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 100 },
    });

    this.setState({ images: response.data.results });

    /// Above SetState needs to add a filter on already displayed SavedImages SetState!
  };

  // componentDidMount() {
  //   this.setState({ savedImages: getAll() });
  // }
  grabSavedImages = () => {
    this.setState({ savedImages: getAll() });
  };

  render() {
    return (
      <div>
        <div
          className="ui segment"
          style={{
            marginTop: "10px",
            width: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <SearchBar onSubmit={this.onSearchSubmit} />
          <button className="ui button" onClick={this.grabSavedImages}>
            Saved Images
          </button>
        </div>
        <h1>Saved Images</h1>
        <SavedImagesList
          images={this.state.savedImages}
          onClickDelete={this.handleDelete}
        />
        <div className="ui divider"></div>
        <h1>Image Search</h1>
        <ImageList
          images={this.state.images}
          onClickSave={this.handleLikeInput}
        />
      </div>
    );
  }
}

export default App;
