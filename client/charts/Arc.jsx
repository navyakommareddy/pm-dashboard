import React, { Component } from 'react';
import { formatDollars } from 'Utilities/Utilities.js';

class Arc extends Component {
    constructor() {
        super();
        this.state = {
            hover: false,
        }
        this.arc = d3.arc();
        this.div = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);
    }

    componentWillMount() {
        this.updateD3(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.updateD3(newProps);
    }

    updateD3(newProps) {
        this.arc.innerRadius(newProps.innerRadius);
        this.arc.outerRadius(newProps.outerRadius);
        // this.arc.cornerRadius(newProps.cornerRadius);
        // this.arc.padAngle(newProps.padAngle);
    }

    mouseOverHandler(d, e) {
        var pageX = e.pageX;
        var pageY = e.pageY;
        this.div.transition().duration(200).style("opacity", .9);
        this.div.html(d.data.label + "<br/>" + formatDollars(d.data.value))
            .style("left", (pageX) + "px")
            .style("top", (pageY - 28) + "px");
    }

    mouseOutHandler() {
        this.div.transition()
            .duration(500)
            .style("opacity", 0);
    }


    render() {
        return (
            <path d={this.arc(this.props.data)}
                style={{ fill: this.props.color, opacity: "0.7" }}></path>

        );
    }
}

export default Arc;


class LabeledArc extends Arc {
    render() {

        const { radius } = this.props;
        var labelr = radius + 30;
        let [labelX, labelY] = this.arc.centroid(this.props.data);
        var h = Math.sqrt(labelX * labelX + labelY * labelY);
        var labelTranslate = `translate(${labelX / h * labelr}, ${labelY / h * labelr})`;
        const { data } = this.props;
        return (
            <g 
                onMouseOver={(e) => this.mouseOverHandler(data, e)}
                onMouseOut={this.mouseOutHandler.bind(this)}
                pointerEvents="all"
            >
                {super.render()}
                <text
                    transform={labelTranslate}
                    textAnchor={(this.props.data.endAngle + this.props.data.startAngle) / 2 > Math.PI ? "end" : "start"}
                    dy="0.35em"
                    // dy="18"
                    x="5"
                    stroke="#000"
                >
                    {this.props.data.data.label}
                </text>
            </g>
        );
    }
}

export { LabeledArc };