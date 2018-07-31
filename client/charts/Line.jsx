import React from 'react';
import { formatDate } from 'Utilities/Utilities.js';
import Dots from '../charts/Dots.jsx';
import Axis from '../charts/Axis.jsx';
import Grid from '../charts/Grid.jsx';

class Line extends React.Component {
    constructor() {
        super()

    }
    render() {
        var parseTime = d3.timeParse("%m/%d/%y");
        var parseDate = d3.timeFormat("%b-%Y")
        const grouped = (this.props.data.ProjectInvoices || this.props.data.Invoices)
            .map(element => {
                return {
                    amt: element.invoiceAmt,
                    date: parseTime(formatDate(element.startDate))
                }
            })

        const dimensions = { width: 1300, height: 500, chartId: 'v1_chart' }

        var margin = { top: 5, right: 50, bottom: 20, left: 50 },
        w = dimensions.width - (margin.left + margin.right),
        h = dimensions.height - (margin.top + margin.bottom);

        var x = d3.scaleTime()
            .domain(d3.extent(grouped, function (d) {
                return d.date;
            }))
            .range([0, w]);
        var y = d3.scaleLinear()
            .domain([0, d3.max(grouped, function (d) {
                return d.amt + 100;
            })])
            .range([h, 0]);
        var line = d3.line()
            .x(function (d) {
                return x(d.date);
            })
            .y(function (d) {
                return y(d.amt);
            }).curve(d3.curveBasis);

        var transform = 'translate(' + margin.left + ',' + margin.top + ')';
        var yAxis = d3.axisLeft()
            .scale(y)
            .ticks(5);

        var xAxis = d3.axisBottom()
            .scale(x)
            .tickValues(grouped.map(function (d, i) {
                if (i > 0)
                    return d.date;
            }).splice(1))
            .ticks(4);

        var yGrid = d3.axisLeft()
            .scale(y)
            .ticks(5)
            // .tickSize(w, 0, 0)
            .tickFormat("");

        return (
            <div>
                <svg id={dimensions.chartId} width={dimensions.width}
                    height={dimensions.height}>
                    <g transform={transform}>
                        <Grid h={h} grid={yGrid} gridType="y" />
                        <Axis h={h} axis={yAxis} axisType="y" />
                        <Axis h={h} axis={xAxis} axisType="x" />
                        <path className="line shadow" d={line(grouped)}
                            strokeLinecap="round" />
                        <Dots data={grouped} x={x} y={y} />

                    </g>
                </svg>
            </div>
        )
    }

}

export default Line;