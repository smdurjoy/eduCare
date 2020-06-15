import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import errorImage from '../../images/oops.png';

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <img src={errorImage}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WentWrong;
