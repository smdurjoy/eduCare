import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import loadingGif from '../../images/loading.gif';

class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <img src={loadingGif}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Loading;
