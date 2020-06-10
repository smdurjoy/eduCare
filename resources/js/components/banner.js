import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Banner extends Component {
    render() {
        return (
            <Fragment>
                <Container className="smallFixedBanner p-0" fluid={true}>
                    <div className="smallBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h2 className="topTitle">Our Courses</h2>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Banner;
