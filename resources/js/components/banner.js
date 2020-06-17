import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Banner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <Container className="smallFixedBanner p-0" fluid={true}>
                    <div className="smallBannerOverlay">
                        <Container className="text-center">
                            <Row className="bannerRow">
                                <Col>
                                    <h2 className="bannerTitle">{this.props.title}</h2>
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
