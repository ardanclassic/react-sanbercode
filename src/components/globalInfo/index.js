import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function globalInfo(props) {
    if (props.data) {
        const formatter = new Intl.NumberFormat('id-ID');
        return (
            <React.Fragment>
                <Row className="global-info">
                    <Col xs={12} md={4} lg={4}>
                        <Card>
                            <Card.Body>
                                <p>Total Case</p>
                                <p>{formatter.format(props.data.cases)}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Card>
                            <Card.Body>
                                <p>Total Recovered</p>
                                <p>{formatter.format(props.data.recovered)}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Card>
                            <Card.Body>
                                <p>Total Death</p>
                                <p>{formatter.format(props.data.deaths)}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
