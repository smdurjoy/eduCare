import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import mobile from '../../images/mobile.svg';

class TopCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center topCourse">
                    <h3 className="title">Top Courses</h3>
                    <Row className="courseRow">
                        <Col lg={4} md={6} sm={12}>
                            <div className="courseCard text-center">
                                <img src={mobile}/>
                                <h2 className="courseName">Web Development </h2>
                                <p className="courseDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                            </div>
                        </Col>

                        <Col>
                            <div className="courseCard text-center">
                                <img src={mobile}/>
                                <h2 className="courseName">Web Development </h2>
                                <p className="courseDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                            </div>
                        </Col>

                        <Col>
                            <div className="courseCard text-center">
                                <img src={mobile}/>
                                <h2 className="courseName">Web Development </h2>
                                <p className="courseDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TopCourses;
