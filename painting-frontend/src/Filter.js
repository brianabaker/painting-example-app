import React from "react";

class Filter extends React.Component {
  state = {
    value: ""
  };

  artistInput = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleArtist = event => {
    event.preventDefault();
    this.props.artistFilter(this.state.value)
  };

  removeFilter = (event) => {
    event.preventDefault();
    this.props.artistFilter('')
    this.setState({
      value: ''
    })
  }



  render() {
    return (
      <div>

        <button className="positive ui button" onClick={this.props.displayFavs}>My Favorite Paintings</button>
        <div className="ui divider">
        </div>
        <form onInput={this.artistInput} onSubmit={this.handleArtist}>
          <label>
          <strong>Sort</strong><br/><br/>
            By Artist:
            <input type="text" value={this.state.value} />
            <input type="submit" value="Go" />
          </label>
          <a onClick={this.removeFilter}>Remove Filter</a>
        </form>
      </div>
    );
  }
}

export default Filter;
