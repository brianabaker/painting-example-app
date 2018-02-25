import React from "react";
import Painting from "./Painting";
import Sort from "./Sort";
import Filter from "./Filter";
import PaintingDetail from "./PaintingDetail";

class GalleryContainer extends React.Component {
  state = {
    originalData: [],
    allPaintings: [],
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

  render() {
    return (
      <div>
        <div className="ui centered grid container">

          <div className="ui borderless menu">
          <div className="item">
            <Sort callback={this.toggleAlpha} ageSort={this.ageSort} />
          </div>
          <div className="item">
            <Filter artistFilter={this.filterArtist} />
          </div>
          </div>

          {this.state.selected ? (
            <PaintingDetail
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
