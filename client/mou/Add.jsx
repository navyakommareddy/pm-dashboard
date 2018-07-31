import React from 'react';
import axios from 'axios';
import { Modal, Form, Button } from 'semantic-ui-react';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    handleOpen = () => this.setState({ open: true })
    handleClose = () => this.setState({ open: false })
    handleAdd = (e) => {
        const body = {
            "mouValue": e.target.mouValue.value,
            "startDate": e.target.startDate.value,
            "endDate": e.target.endDate.value,
        }
        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            }
        };
        (axios.post('http://localhost:2305/mou/add', body, header))
            .then((res) => {

                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("ERROR: ", err);
            })
        this.setState({ projects: body });
        this.handleClose();

    };
    render() {
        return (
            <Modal className="scrolling"
                open={this.state.open}
                onClose={this.handleClose}
                trigger={<Button color="blue" onClick={this.handleOpen}>ADD MOU</Button>}
                style={{ overflowY: "scroll" }}>
                <Modal.Header>Add</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <div className="container">
                            <Form className="ui form"
                                onSubmit={e => this.handleAdd(e)}>
                                <Form.Field>
                                    <label htmlFor='mouValue'>Mou Value</label>
                                    <input id="mouValue" name="mouValue" type="text"
                                        placeholder='Mou Value' style={{ width: "370px" }}
                                        required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='startDate'>Start Date</label>
                                    <input id="startDate" name="startDate" type="date"
                                        placeholder='Start Date' style={{ width: "370px" }}
                                        required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='endDate'>End Date</label>
                                    <input id="endDate" name="endDate" type="date"
                                        placeholder='End Date' style={{ width: "370px" }}
                                        required />
                                </Form.Field>
                                <Button type='submit' positive content='Add' />
                                <Button type='submit' content='Cancel' onClick={this.handleClose} />
                            </Form>
                        </div>
                    </Modal.Description>
                </Modal.Content>

            </Modal>
        )
    }
}

export default Add;