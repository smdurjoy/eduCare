import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container className="topFixedBanner" fluid={true}>
                    <div className="topBannerOverlay">
                        <Row>
                            <Col className="text-center">
                                <h6 className="topTitle">We believe</h6>
                                <h2 className="topSubTitle">Passion of learning</h2>
                                <h6>Its a great platform to learn</h6>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;
