import React from "react";
import Painting from "./Painting";
import Sort from "./Sort";
import Filter from "./Filter";
import PaintingDetail from "./PaintingDetail";

class GalleryContainer extends React.Component {
  state = {
    originalData: [],
    allPaintings: [],
    myFavoritePaintings: [],
    selected: null
  };

  componentDidMount() {
    this.fetchAllPainting();
  }

  fetchAllPainting = () => {
    fetch("http://localhost:3000/api/v1/paintings")
      .then(res => res.json())
      .then(json => {
        let allPaintingsVar = json;
        let alphaPaintings = allPaintingsVar.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        this.setState({
          originalData: [...alphaPaintings],
          allPaintings: [...alphaPaintings]
        });
        console.log(allPaintingsVar);
      });
  };

  toggleAlpha = event => {
    if (event === 1) {
      let ascPaintings = this.state.allPaintings.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      this.setState({
        allPaintings: ascPaintings
      });
    } else if (event === 2) {
      let decPaintings = this.state.allPaintings.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      this.setState({
        allPaintings: decPaintings
      });
    }
  };

  ageSort = event => {
    if (event === 3) {
      let oldest = this.state.allPaintings.sort(function(a, b) {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
      });
      this.setState({
        allPaintings: oldest
      });
    } else if (event === 4) {
      let youngest = this.state.allPaintings.sort(function(a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
      });
      this.setState({
        allPaintings: youngest
      });
    }
  };

  filterArtist = value => {
    let artistFilter = this.state.originalData.filter(painting =>
      painting.artist.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      allPaintings: artistFilter
    });
  };

  handlePaintingDetail = val => {
    this.setState({
      selected: val
    });
  };

  handleNull = event => {
    event.preventDefault();
    this.setState({
      selected: null
    });
  };

  addToMyFavoritePaintings = (value) => {
    console.log('favs', value)
    this.setState({
      selected: null,
      myFavoritePaintings: [...this.state.myFavoritePaintings, value]
    })
  }

  renderFavorites = () => {
    console.log('in the render favs')
    this.setState({
      selected: null,
      allPaintings: this.state.myFavoritePaintings
    })
  }

  removePainting = (value) => {
    console.log(value)
    console.log('in the remove painting')
    let newArr = this.state.myFavoritePaintings.filter(painting => painting.id !== value.id )
    this.setState({
      myFavoritePaintings: newArr
    })
  }

  render() {
    return (
      <div>
        <div className="ui centered grid container">

          <div className="ui borderless menu">
          <div className="item">
            <Sort callback={this.toggleAlpha} ageSort={this.ageSort} />
          </div>
          <div className="item">
            <Filter displayFavs={this.renderFavorites} artistFilter={this.filterArtist} />
          </div>
          </div>

          {this.state.selected ? (
            <PaintingDetail
            favorites={this.addToMyFavoritePaintings}
              inFavs={this.state.myFavoritePaintings}
              removeFav={this.removePainting}
              data={this.state.selected}
              callback={this.handleNull}
            />
          ) : (
            <Painting
              callback={this.handlePaintingDetail}
              data={this.state.allPaintings}
            />
          )}
        </div>
      </div>
    );
  }
}

export default GalleryContainer;
