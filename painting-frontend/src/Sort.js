import React from "react";

class Sort extends React.Component {

  state = {
    value: 1
  };

  handleRadioButton(value) {
    this.setState({
      value: value
    });
    this.props.callback(value)
  }

  handleAgeSort(age) {
    this.setState({
      value: age
    });
    this.props.ageSort(age)
  }

  render() {
    return (
      <div>
          <h4>Sort By Title:</h4>
          <div className="title">
            <label>
            <input
                type="radio"
                checked={this.state.value === 1}
                onChange={() => this.handleRadioButton(1)}
            />
              Title A-Z
            </label>
            <label>
            <input
                type="radio"
                checked={this.state.value === 2}
                onChange={() => this.handleRadioButton(2)}
            />
              Title Z-A
            </label>

        </div>

        <div className="ui divider">
        </div>

        <h4>Sort By Year:</h4>
        <label>
        <input
            type="radio"
            checked={this.state.value === 3}
            onChange={() => this.handleAgeSort(3)}
        />
          Oldest First
        </label>
        <label>
        <input
            type="radio"
            checked={this.state.value === 4}
            onChange={() => this.handleAgeSort(4)}
        />
          Youngest First
        </label>

      </div>
    );
  }
}



  // return <div className="ui borderless menu">{checkBoxes}</div>;

export default Sort;
