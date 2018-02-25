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
        <form onInput={this.artistInput} onSubmit={this.handleArtist}>
          <label>
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
