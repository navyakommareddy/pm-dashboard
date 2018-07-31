import React from 'react';

class Dots extends React.Component {
    render() {
        var _self = this;
        var data = this.props.data.splice(1);
        // data.pop();
        var circles = data.map(function (d, i) {
            return (
                <circle  r="7"
                    cx={_self.props.x(d.date)}
                    cy={_self.props.y(d.amt)} fill="#7dc7f4"
                    stroke="#3f5175" strokeWidth="5px" key={i} />)
        });
        return (
            <g>
                {circles}
            </g>

        )
    }
}

export default Dots;