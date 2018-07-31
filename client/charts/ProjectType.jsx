import React from 'react';
import Piechart from '../charts/Piechart.jsx';

const ProjectType = (props) => {
    const grouped = props.data
        .map(element => {
            return {
                label: element.clientType,
                value: element.totalBudget
            }
        })

    let data = new Map();
    grouped.forEach(function (type) {

        let types = data.get(type.label);

        if (types !== undefined) {
            types.push(type);
        }
        else {
            types = [type];
        }
        data.set(type.label, types);
    });


    let projectInfo = [];
    const projectTypes = data.forEach(function (value, key) {
        let sum = 0;
        value.map(total => {
            sum += total.value;
        });
        var obj = {
            label: key,
            value: sum
        }
        projectInfo.push(obj)
    })
    const radius = Math.min(150, 150) / 2;

    return (
        <svg viewBox="0 0 300 300" width= "300%" height="auto" preserveAspectRatio="xMaxYMin meet">
            <Piechart x={150} y={150} outerRadius={100}
                innerRadius={50} cornerRadius={7} padAngle={.02}
                data={projectInfo} 
                style={{
                    marginTop: "50px", marginBottom: "50px",
                    marginLeft: "50px", marginRight: "100px"
                }} 
                radius={radius}/>
        </svg>
    )
}
export default ProjectType;