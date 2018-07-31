import React from 'react';
import { Table } from 'semantic-ui-react';
import { formatDollars, formatDate } from 'Utilities/Utilities.js';
import Edit from '../tableComponent/Delete.jsx';
import Delete from '../tableComponent/Edit.jsx';
import { Link } from 'react-router-dom';

const Body = (props) => {
    return (
        <Table.Body>
            {
                props.projects.map(project =>
                    <Table.Row key={project.Id}>
                        <Table.Cell><Link to={{
                            pathname: '/projectDetails',
                            state: { project }
                        }}>
                            {project.projectName}</Link></Table.Cell>
                        <Table.Cell>{project.projectDesc}</Table.Cell>
                        <Table.Cell>{formatDollars(project.totalBudget)}</Table.Cell>
                        <Table.Cell>{formatDollars(project.invoiceAmtTodate)}</Table.Cell>
                        <Table.Cell>{formatDollars(project.balance)}</Table.Cell>
                        <Table.Cell>{project.type}</Table.Cell>
                        <Table.Cell>{formatDate(project.startDate)}</Table.Cell>
                        <Table.Cell>{formatDate(project.endDate)}</Table.Cell>
                        <Table.Cell>{project.projectManager}</Table.Cell>
                        <Table.Cell>{project.overheadRate}</Table.Cell>
                        <Table.Cell>{project.clientName}</Table.Cell>
                        <Table.Cell>{project.clientType}</Table.Cell>
                        <Table.Cell>{project.contactName}</Table.Cell>
                        <Table.Cell>{project.email}</Table.Cell>
                        <Table.Cell>{project.phone}</Table.Cell>
                        <Table.Cell>{project.subcontractor}</Table.Cell>
                        <Table.Cell><Delete projects={project} /></Table.Cell>
                        <Table.Cell><Edit projects={project} /></Table.Cell>

                    </Table.Row>)
            }
        </Table.Body>)

}

Body.propTypes = {
};

export default Body;