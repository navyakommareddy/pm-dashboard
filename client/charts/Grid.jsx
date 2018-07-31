import React from 'react';
import ReactDOM from 'react-dom';

class Grid extends React.Component {
  componentDidMount() {
    this.renderAxis()
  }
  componentDidUpdate() {
    this.renderAxis()
  }
  renderAxis() {
    var node = ReactDOM.findDOMNode(this);
    d3.select(node).call(this.props.grid);
  }
  render() {
    var translate = "translate(0," + (this.props.h) + ")";

    return (
      <g //className="y-grid"
        transform={this.props.gridType == 'x' ? translate : ""} >
      </g>
    );
  }
}

export default Grid;