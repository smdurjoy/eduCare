import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class TopCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center">
                    <Row>
                        <Col>
                            <h3 className="title">Top Courses</h3>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TopCourses;
