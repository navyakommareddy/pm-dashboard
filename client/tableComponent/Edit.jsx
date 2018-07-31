import React from 'react';
import { Modal, Button, Form, Segment } from 'semantic-ui-react';
import axios from 'axios';


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
        }
        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            }
        };
        body.type == "standalone" ?
            (axios.post('http://localhost:2305/project/edit', body, header)) :
            (axios.post('http://localhost:2305/taskorder/edit', body, header))
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
        const { Id, projectName, projectDesc, totalBudget, type, startDate,
            endDate, projectManager, overheadRate,
            clientName, clientType, contactName, email, phone }
            = this.state.projects || this.props.projects;
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
                                    <label htmlFor='projectName'>Project Name</label>
                                    <input id="projectName" name="projectName" type="text"
                                        placeholder='Project Name' style={{ width: "370px" }}
                                        defaultValue={projectName} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='projectDesc'>Project Description</label>
                                    <input id="projectDesc" name="projectDesc" type="text"
                                        placeholder='Project Description' style={{ width: "370px" }}
                                        defaultValue={projectDesc} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='totalBudget'>Contract Value</label>
                                    <input id="totalBudget" name="totalBudget" type="text"
                                        placeholder='Contract Value' style={{ width: "370px" }}
                                        defaultValue={totalBudget} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='type'>Type</label>
                                    <input id="type" name="type" type="text"
                                        placeholder='Type' style={{ width: "370px" }}
                                        defaultValue={type} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='startDate'>Start Date</label>
                                    <input id="startDate" name="startDate" type="date"
                                        placeholder='Start Date' style={{ width: "370px" }}
                                        defaultValue={startDate} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='endDate'>End Date</label>
                                    <input id="endDate" name="endDate" type="date"
                                        placeholder='End Date' style={{ width: "370px" }}
                                        defaultValue={endDate} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='projectManager'>Project Manager</label>
                                    <input id="projectManager" name="projectManager" type="text"
                                        placeholder='Project Manager' style={{ width: "370px" }}
                                        defaultValue={projectManager} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='overheadRate'>Overhead Rate</label>
                                    <input id="overheadRate" name="overheadRate" type="text"
                                        placeholder='Overhead Rate' style={{ width: "370px" }}
                                        defaultValue={overheadRate} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='clientName'>Client Name</label>
                                    <input id="clientName" name="clientName" type="text"
                                        placeholder='Client Name' style={{ width: "370px" }}
                                        defaultValue={clientName} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='clientType'>Client Type</label>
                                    <input id="clientType" name="clientType" type="text"
                                        placeholder='Client Type' style={{ width: "370px" }}
                                        defaultValue={clientType} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='contactName'>Contact Name</label>
                                    <input id="contactName" name="contactName" type="text"
                                        placeholder='Contact Name' style={{ width: "370px" }}
                                        defaultValue={contactName} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='email'>Email</label>
                                    <input id="email" name="email" type="text"
                                        placeholder='Email' style={{ width: "370px" }}
                                        defaultValue={email} required />
                                </Form.Field>
                                <Form.Field>
                                    <label htmlFor='phone'>Phone</label>
                                    <input id="phone" name="phone" type="text"
                                        placeholder='Phone' style={{ width: "370px" }}
                                        defaultValue={phone} required />
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