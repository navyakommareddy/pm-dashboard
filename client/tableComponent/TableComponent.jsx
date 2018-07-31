import React from 'react';
import { Icon, Menu, Table, Button, Input } from 'semantic-ui-react';
import Body from '../tableComponent/Body.jsx';
import Add from '../tableComponent/Add.jsx';

const TableComponent = (props) => {
    return (
        <div style={{ overflowX: "scroll" }}>
            <Input action={{ icon: 'search' }} placeholder='Search...' />
            <Table sortable celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={props.column === 'projectName' ? props.direction : null}
                            onClick={props.handleSort('projectName')}>Project Name</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'projectDesc' ? props.direction : null}
                            onClick={props.handleSort('projectDesc')}>Project Description</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'totalBudget' ? props.direction : null}
                            onClick={props.handleSort('totalBudget')}>Contract Value</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'invoiceAmtTodate' ? props.direction : null}
                            onClick={props.handleSort('invoiceAmtTodate')}>Total Invoice</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'balance' ? props.direction : null}
                            onClick={props.handleSort('balance')}>Budget Remaining</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'type' ? props.direction : null}
                            onClick={props.handleSort('type')}>Type</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'startDate' ? props.direction : null}
                            onClick={props.handleSort('startDate')}>Start Date</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'endDate' ? props.direction : null}
                            onClick={props.handleSort('endDate')}>End Date</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'projectManager' ? props.direction : null}
                            onClick={props.handleSort('projectManager')}>Project Manager</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'overheadRate' ? props.direction : null}
                            onClick={props.handleSort('overheadRate')}>Overhead Rate</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'clientName' ? props.direction : null}
                            onClick={props.handleSort('clientName')}>Client Name</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'clientType' ? props.direction : null}
                            onClick={props.handleSort('clientType')}>Client Type</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'contactName' ? props.direction : null}
                            onClick={props.handleSort('contactName')}>Contact Name</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'email' ? props.direction : null}
                            onClick={props.handleSort('email')}>Email</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'phone' ? props.direction : null}
                            onClick={props.handleSort('phone')}>Phone</Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={props.column === 'subcontractor' ? props.direction : null}
                            onClick={props.handleSort('subcontractor')}>Subcontractor</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Body projects={props.projects} />
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Add />
                        </Table.HeaderCell>
                        <Table.HeaderCell colSpan='13'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon onClick={(event, page) => this.handleChangePage(event, page)}>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                {/* <Menu.Item as = 'a'>{totalCount}</Menu.Item> */}
                                <Menu.Item as='a' icon onClick={(event, page) => this.handleChangePage(event, page)}>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    );
}
TableComponent.propTypes = {
};

export default TableComponent;
