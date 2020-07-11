import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function loadingMode(props) {
    const type = props.data;
    if (type === 'table') {
        return (
            <React.Fragment>
                <div className="table-responsive" style={{ height: 50, overflow: 'hidden' }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>###</th>
                                <th>Country</th>
                                <th>Case</th>
                                <th>Recovered</th>
                                <th>Death</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <Spinner animation="border" variant="dark" />
            </React.Fragment>
        )
    } else if (type === 'global-info') {
        return <Spinner animation="border" variant="dark" />
    } else {
        return false
    }
}
