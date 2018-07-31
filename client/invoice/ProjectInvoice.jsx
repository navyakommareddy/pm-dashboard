import React from 'react';
import { Modal, Form, Button } from 'semantic-ui-react';
import axios from 'axios';

class ProjectInvoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    handleOpen = () => this.setState({ open: true })
    handleClose = () => this.setState({ open: false })
    handleAdd = (e, id) => {
        const body = {
            "startDate": e.target.startDate.value,
            "endDate": e.target.endDate.value,
            "invoiceAmt": e.target.invoiceAmt.value,
            "paid": e.target.paid.value,
            "projectId": id,
        }
        body.paid == "yes" ? (body.paid = 1) : (body.paid = 0);
        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            }
        };
        axios.post('http://localhost:2305/projectinvoice/add', body, header)
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
        const { Id } = this.props.data;
        return (
            <Modal className="scrolling"
                open={this.state.open}
                onClose={this.handleClose}
                trigger={<Button color="blue" onClick={this.handleOpen}>ADD INVOICE</Button>}
                style={{ overflowY: "scroll" }}
                size="small">
                <Modal.Header>Project Invoice</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <div className="container">
                            <Form className="ui form"
                                onSubmit={e => this.handleAdd(e, Id)}>

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
                                    <label htmlFor='invoiceAmt'>Invoice Amount</label>
                                    <input id="invoiceAmt" name="invoiceAmt" type="text"
                                        placeholder='Invoice Amount' style={{ width: "370px" }}
                                        required />
                                </Form.Field>
                                <Form.Field id="paid" label="Paid" control="select"
                                    style={{ width: "370px" }}>
                                    <option value="yes"> yes</option>
                                    <option value="no">no </option>
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

export default ProjectInvoice;