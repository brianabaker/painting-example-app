import React, { Component } from "react";
import "./App.css";
// import Painting from "./Painting";
import GalleryContainer from "./GalleryContainer";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <GalleryContainer />
      </div>
    );
  }
}

export default App;
