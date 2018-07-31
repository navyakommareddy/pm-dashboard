import React from 'react';
import Piechart from '../charts/Piechart.jsx';

const ActiveProject = (props) => {
    const data = props.data.map(element => {
        return {
            label: element.projectName,
            value: element.totalBudget
        }
    })
   const radius = Math.min(150, 150) / 2;
    return (
        <svg viewBox="100 0 400 400" width= "400%" height="auto" preserveAspectRatio="xMaxYMin meet">
            <Piechart x={150} y={150} outerRadius={100}
                innerRadius={50} cornerRadius={7} padAngle={.02}
                data={data} 
                style={{
                    marginTop: "50px", marginBottom: "50px",
                    marginLeft: "50px", marginRight: "100px"
                }} 
                radius={radius}/>
        </svg>
    )
}

export default ActiveProject;