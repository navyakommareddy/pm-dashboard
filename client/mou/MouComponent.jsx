import React from 'react';
import { Icon, Menu, Table, Button, Input } from 'semantic-ui-react';
import Body from '../mou/Body.jsx';
import Add from '../mou/Add.jsx';
import axios from 'axios';


class MouComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouData: [],
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
        (axios.get('http://localhost:2305/mou', header))
            .then((res) => {
                this.setState({ mouData: res.data });
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("ERROR: ", err);
            })
    }

    handleSort = (clickedColumn) => () => {

        const { column, mouData, direction } = this.state
        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                mouData: _.sortBy(mouData, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            mouData: mouData.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }
    render() {
        return (
            <div style={{ overflowX: "scroll" }}>
                <Input action={{ icon: 'search' }} placeholder='Search...' />
                <Table sortable celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell
                                sorted={this.state.column === 'mouValue' ?
                                    this.state.direction : null}
                                onClick={this.handleSort('mouValue')}>
                                Mou Value</Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={this.state.column === 'startDate' ?
                                    this.state.direction : null}
                                onClick={this.handleSort('startDate')}>
                                Start Date</Table.HeaderCell>
                            <Table.HeaderCell
                                sorted={this.state.column === 'endDate' ?
                                    this.state.direction : null}
                                onClick={this.handleSort('endDate')}>
                                End Date</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Body mous={this.state.mouData} />
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell>
                                <Add />
                            </Table.HeaderCell>
                            {/* <Table.HeaderCell colSpan='13'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon
                                        onClick={(event, page)
                                            => this.handleChangePage(event, page)}>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as = 'a'>{totalCount}</Menu.Item>
                                    <Menu.Item as='a' icon
                                        onClick={(event, page) =>
                                            this.handleChangePage(event, page)}>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell> */}
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </div>

        )
    }

}
// MouComponent.propTypes = {
// };

export default MouComponent;
