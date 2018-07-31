import React from 'react';
import { Table } from 'semantic-ui-react';
import { formatDollars, formatDate } from 'Utilities/Utilities.js';
import Edit from '../mou/Edit.jsx';
import Delete from '../mou/Delete.jsx';
import Taskorder from '../mou/Taskorder.jsx';

const Body = (props) => {
    return (
        <Table.Body>
            {
                props.mous.map(mou =>
                    <Table.Row key={mou.Id}>
                        <Table.Cell>{formatDollars(mou.mouValue)}</Table.Cell>
                        <Table.Cell>{formatDate(mou.startDate)}</Table.Cell>
                        <Table.Cell>{formatDate(mou.endDate)}</Table.Cell>
                        <Table.Cell><Edit mous={mou} /></Table.Cell>
                        <Table.Cell><Delete mous={mou} /></Table.Cell>
                        <Table.Cell><Taskorder mous={mou} /></Table.Cell>
                    </Table.Row>)
            }
        </Table.Body>)

}

Body.propTypes = {
};

export default Body;