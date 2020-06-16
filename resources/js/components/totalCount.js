import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import countImage from '../../images/totalCountImage.jpg';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class TotalCount extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row className="totalCountRow">
                        <Col lg={5} md={5} sm={12} className="countImageCol">
                            <img src={countImage}/>
                        </Col>
                        <Col lg={7} md={7} sm={12} className="countDesCol">
                            <Row>
                                <Col lg={2} md={2} sm={12}>
                                </Col>
                                <Col lg={10} md={10} sm={12} className="totalCol">
                                    <div className="totalNumber">
                                        <CountUp start={0} end={45}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef}/>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </div>
                                    <div className="totalTitle">
                                        <h2>Best & Most Involved Teachers</h2>
                                        <p>Key features are the ability to develop relationships with their students, patient, caring, and kind personality, knowledge of learners. Engaging students in learning.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col lg={2} md={2} sm={12}>
                                </Col>
                                <Col lg={10} md={10} sm={12} className="totalCol">
                                    <div className="totalNumber">
                                        <CountUp start={0} end={400}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef}/>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </div>
                                    <div className="totalTitle">
                                        <h2>Large selection of courses</h2>
                                        <p>Explore a variety of fresh topics.
                                            Find the right instructor for you. Learn on your schedule.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col lg={2} md={2} sm={12}>
                                </Col>
                                <Col lg={10} md={10} sm={12} className="totalCol">
                                    <div className="totalNumber">
                                        <CountUp start={0} end={32}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef}/>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </div>
                                    <div className="totalTitle">
                                        <h2>High-Quality Course Categories</h2>
                                        <p>For many years, we have been helping people of all inteersts adn ages learn and we have more positive reviews than anyone else.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TotalCount;
