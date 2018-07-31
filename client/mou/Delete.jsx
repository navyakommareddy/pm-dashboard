import React from 'react';
import { Icon, Modal, Header, Button } from 'semantic-ui-react';
import axios from 'axios';

class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    handleOpen = () => this.setState({ open: true });
    handleClose = () => this.setState({ open: false })
    handleDelete = (e, id) => {
        const body = {
            "Id": id
        }
        let header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            }
        };
        (axios.post('http://localhost:2305/mou/delete', body, header))
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("ERROR: ", err);
            })
        this.setState({ mous: body });
        this.handleClose();

    }
    render() {
        const { Id } =
            this.state.mous || this.props.mous;
        return (
            <Modal className="scrolling"
                open={this.state.open}
                onClose={this.handleClose}
                trigger={<Button icon='trash' onClick={this.handleOpen} />} basic size="small">
                <Header icon='trash' content='Delete Project' />
                <Modal.Content style={{ overflow: 'auto' }}>
                    <h1>Are you sure you want to delete?</h1></Modal.Content>
                <Modal.Actions>
                    <Button basic color="red"
                        onClick={this.handleClose} inverted >
                        <Icon name="remove" /> No
                    </Button>
                    <Button color="green" onClick={e => this.handleDelete(e, Id)} inverted>
                        <Icon name="checkmark" /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}


export default Delete;