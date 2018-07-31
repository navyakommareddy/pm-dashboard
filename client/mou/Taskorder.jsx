import React from 'react';
import { Modal, Form, Button } from 'semantic-ui-react';
import axios from 'axios';

class Taskorder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    handleAdd = (e, id) => {
        const body = {
            "projectName": e.target.projectName.value,
            "projectDesc": e.target.projectDesc.value,
            "totalBudget": e.target.totalBudget.value,
            "type": e.target.type.value,
            "startDate": e.target.startDate.value,
            "endDate": e.target.endDate.value,
            "projectManager": e.target.projectManager.value,
            "overheadRate": e.target.overheadRate.value,
            "clientName": e.target.clientName.value,
            "clientType": e.target.clientType.value,
            "contactName": e.target.contactName.value,
            "email": e.target.email.value,
            "phone": e.target.phone.value,
            "subcontractor": e.target.subcontractor.value,
            "mouId": id,
        }
        body.subcontractor == "yes" ? (body.subcontractor = 1) : (body.subcontractor = 0)
        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            }
        };
        axios.post('http://localhost:2305/taskorder/add', body, header)
            .then((res) => {
                // document.getElementById("myform").reset();
                // window.alert("drop course Success");
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("ERROR: ", err);
            })
        this.handleClose();

    };
    handleOpen = () => this.setState({ open: true })
    handleClose = () => this.setState({ open: false })
    render() {
        const { Id } = this.props.mous;
        return (
            <Modal className="scrolling"
                open={this.state.open}
                onClose={this.handleClose}
                trigger={<Button color="blue" onClick={this.handleOpen}>ADD TASKORDER</Button>}
                style={{ overflowY: "scroll" }}>
                <Modal.Header>Add Taskorder</Modal.Header>
                <Modal.Content>
                    <div className="container">
                        <Form className="ui form"
                            onSubmit={e => this.handleAdd(e, Id)}>
                            <Form.Field>
                                <label htmlFor='projectName'>Taskorder Name</label>
                                <input id="projectName" name="projectName" type="text"
                                    placeholder='Project Name' style={{ width: "370px" }}
                                    required />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='projectDesc'>Taskorder Description</label>
                                <input id="projectDesc" name="projectDesc" type="text"
                                    placeholder='Project Description' style={{ width: "370px" }}
                                    required />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='totalBudget'>Contract Value</label>
                                <input id="totalBudget" name="totalBudget" type="text"
                                    placeholder='Contract Value' style={{ width: "370px" }}
                                    required />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='totalInvoice'>Total Invoice</label>
                                <input id="totalInvoice" name="totalInvoice" type="text"
                                    placeholder='Total Invoice' style={{ width: "370px" }}
                                    defaultValue="0" disabled required />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='budgetRemaining'>Budget Remaining</label>
                                <input id="budgetRemaining" name="budgetRemaining" type="text"
                                    placeholder='Budget Remaining' style={{ width: "370px" }}
                                    defaultValue="0" disabled required />
                            </Form.Field>
                            <Form.Field id="type" label="Type" control="select"
                                style={{ width: "370px" }}>
                                <option value="taskorder"> taskorder</option>
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
                            <Form.Field>
                                <label htmlFor='projectManager'>Project Manager</label>
                                <input id="projectManager" name="projectManager" type="text"
                                    placeholder='Project Manager' style={{ width: "370px" }}
                                    required />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='overheadRate'>Overhead Rate</label>
                                <input id="overheadRate" name="overheadRate" type="text"
                                    placeholder='Overhead Rate' style={{ width: "370px" }}
                                    required />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='clientName'>Client Name</label>
                                <input id="clientName" name="clientName" type="text"
                                    placeholder='Client Name' style={{ width: "370px" }}
                                    required />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='clientType'>Client Type</label>
                                <input id="clientType" name="clientType" type="text"
                                    placeholder='Client Type' style={{ width: "370px" }}
                                    required />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='contactName'>Contact Name</label>
                                <input id="contactName" name="contactName" type="text"
                                    placeholder='Contact Name' style={{ width: "370px" }}
                                    required />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='email'>Email</label>
                                <input id="email" name="email" type="text"
                                    placeholder='Email' style={{ width: "370px" }}
                                    required />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='phone'>Phone</label>
                                <input id="phone" name="phone" type="text"
                                    placeholder='Phone' style={{ width: "370px" }}
                                    required />
                            </Form.Field>
                            <Form.Field id="subcontractor" label="Subcontractor" control="select"
                                style={{ width: "370px" }}>
                                <option value="yes"> yes</option>
                                <option value="no">no </option>
                            </Form.Field>
                            <Button type='submit' positive content='Add' />
                            <Button type='submit' content='Cancel' onClick={this.handleClose} />
                        </Form>
                    </div>
                </Modal.Content>

            </Modal>
        )
    }
}

export default Taskorder;