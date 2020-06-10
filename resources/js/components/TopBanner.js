import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container className="topFixedBanner p-0" fluid={true}>
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h6 className="topSubTitle">We believe in</h6>
                                    <h2 className="topTitle">Passion for Learning</h2>
                                    <h6 className="topSubTitle">and Its a great platform to learn</h6>
                                    <Button className="btn joinNowBtn">Join now</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;
