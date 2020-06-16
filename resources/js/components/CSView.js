import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class CsView extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="csViewRow text-dark">
                        <Col md={6} lg={6} sm={12} className="csDes">
                            <h2>Build Your Career With Us</h2>
                            <p>Our goal is to learn the next generation of creative professionals for a future in any industry.
                                We offer courses in most demanded industries. Whether you begin your journey on our courses website or choose the flexibility of video learning, our courses are designed to help you along your path.</p>
                        </Col>
                        <Col md={6} lg={6} sm={12}>
                            <h2 className="tsCount"><span>400+</span> Topics || <span>321+</span> Students</h2> <br/>
                            <Button className="btn viewCourseBtn csbtn">Be a proud member <i className="fas fa-caret-right"></i></Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CsView;
