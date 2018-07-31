import React from 'react';
import ReactDOM from 'react-dom';

class Axis extends React.Component {
    componentDidMount() {
        this.renderAxis()
    }
    componentDidUpdate() {
        this.renderAxis()
    }
    renderAxis() {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.axis);
    }
    render() {
        var translate = "translate(0," + (this.props.h) + ")";

        return (
            <g //className="axis"
                transform={this.props.axisType == 'x' ? translate : ""} >
            </g>
        );
    }
}

export default Axis;