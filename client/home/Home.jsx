import React from 'react';
import axios from 'axios';
import TableComponent from '../tableComponent/TableComponent.jsx';
import _ from 'lodash';
import { projectInvoiceAmt } from '../project/Project.jsx';
import { taskorderInvoiceAmt } from '../taskorder/Taskorder.jsx';
import { PropTypes } from 'react';
import ActiveProject from '../charts/ActiveProject.jsx';
import ProjectType from '../charts/ProjectType.jsx';
import TabPoint from '../tab/TabPoint.jsx';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectData: [],
            column: null,
            direction: null,
        };
    }

    async componentDidMount() {
        let currentComponent = this;

        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            }
        };
        try {
            const [projectDetails, taskorderDetails] =
                await Promise.all([axios.get('http://localhost:2305/project', header),
                axios.get('http://localhost:2305/taskorder', header),])

            projectInvoiceAmt(projectDetails);
            taskorderInvoiceAmt(taskorderDetails)
            const details = projectDetails.data.concat(taskorderDetails.data);
            currentComponent.setState({ projectData: details });
        }
        catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }
    
    handleSort = (clickedColumn) => () => {

        const { column, projectData, direction } = this.state
        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                projectData: _.sortBy(projectData, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            projectData: projectData.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }


    render() {
        if (!this.state.projectData.length) {
            return <div className="sub_icon"><i className="fa fa-spinner fa-spin" style={{ fontSize: "50px" }}>
            </i></div>
        }

        return (
            <div className="main">
                <br />
                <div className="ui cards" >
                    <div className="card" style={{ width: "30%" }}>
                        <div className="content" style={{ width: "30%" }}>
                            <div className="header">Active Projects by Budget</div><br /><br />
                            <div className="description" style={{ height: "300px" }}>
                                <ActiveProject data={this.state.projectData} /></div>
                        </div>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="card" style={{ width: "30%" }}>
                        <div className="content" style={{ width: "30%" }}>
                            <div className="header">Client Type by Project Budget</div><br /><br />
                            <div className="description" style={{ height: "250px" }}>
                                <ProjectType
                                    data={this.state.projectData} /></div>
                        </div>
                    </div>
                    <div className="card" style={{ height: "20%" }}>
                        <div className="content" style={{ height: "20%" }}>
                            <h5>Total Projects</h5>
                            <h4>{this.state.projectData.length}</h4>
                        </div>
                    </div>
                </div>
                <br />

                <div>
                    {/* <Tab> */}
                    <TabPoint projects={this.state.projectData}
                        handleSort={this.handleSort}
                        column={this.state.column}
                        direction={this.state.direction} />
                </div>
                {/* <div>
                    <TableComponent
                        projects={this.state.projectData}
                        handleSort={this.handleSort}
                        column={this.state.column}
                        direction={this.state.direction}
                    />
                </div> */}
                <br />
            </div>
        )

    }
}
export default Home;




