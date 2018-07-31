import React from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import {formatDate } from 'Utilities/Utilities.js';


class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            projects: '',
        }
    }
    handleOpen = () => this.setState({ open: true })
    handleClose = () => this.setState({ open: false })

    handleEdit = (e, id) => {
        const body = {
            "Id": id,
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
        (axios.post('http://localhost:2305/mou/edit', body, header))
            .then((res) => {
                // document.getElementById("myform").reset();
                // window.alert("drop course Success");
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("ERROR: ", err);
            })
        this.setState({ projects: body });
        this.handleClose();

    };

    render() {
        const { Id, mouValue, startDate,
            endDate }
            = this.state.mous || this.props.mous;
        return (
            <Modal className="scrolling"
                open={this.state.open}
                onClose={this.handleClose}
                style={{ overflowY: "scroll" }}
                trigger={<Button basic primary icon='pencil' onClick={this.handleOpen} />}
                closeIcon>
                <Modal.Header> Edit </Modal.Header>
                <Modal.Content style={{ overflow: 'auto' }}>
                    <Modal.Description>
                        <div className="container">
                            <Form className="ui form" onSubmit={e => this.handleEdit(e, Id)}>
                                <Form.Field>
                                    <label htmlFor='mouValue'>Mou Value</label>
                                    <input id="mouValue" name="mouValue" type="text"
                                        placeholder='Mou Value' style={{ width: "370px" }}
                                        defaultValue={mouValue} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='startDate'>Start Date</label>
                                    <input id="startDate" name="startDate" type="date"
                                        placeholder='Start Date' style={{ width: "370px" }}
                                        defaultValue={formatDate(startDate)} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='endDate'>End Date</label>
                                    <input id="endDate" name="endDate" type="date"
                                        placeholder='End Date' style={{ width: "370px" }}
                                        defaultValue={endDate} required />
                                </Form.Field>
                                <Button type='submit' positive content='Save' />
                                <Button type='submit' content='Cancel' onClick={this.handleClose} />
                            </Form>
                        </div>
                    </Modal.Description>
                </Modal.Content>
            </Modal >

        )
    }
}

Edit.propTypes = {
};
export default Edit;