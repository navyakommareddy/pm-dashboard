import React from 'react';
import ProjectInvoice from '../invoice/ProjectInvoice.jsx';
import TaskorderInvoice from '../invoice/TaskorderInvoice.jsx';

class AddInvoice extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data } = this.props
        return (

            <div>
                {data.type == "standalone" ?
                    <ProjectInvoice data={this.props.data} /> :
                    <TaskorderInvoice data={this.props.data} />}
            </div>
        )
    }

}

export default AddInvoice;