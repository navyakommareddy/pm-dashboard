import React from 'react';
import Line from '../charts/Line.jsx';
import AddInvoice from '../invoice/AddInvoice.jsx';

class Invoice extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br />
                <div className="ui cards" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="card" style={{ width: "90%" }}>
                        <div className="content" style={{ width: "90%" }}>
                            <div className="header">Burn Rate</div><br /><br />
                            <div className="description" style={{ height: "500px" }}>
                                <Line data={this.props.location.state.project}
                                />
                            </div>
                        </div>
                        <div className="extra content">
                            <AddInvoice data={this.props.location.state.project} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Invoice;