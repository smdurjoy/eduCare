import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class CourseTopic extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="courseTopicContainer">
                    <Row className="courseTopicRow">
                        <Col md={6} lg={6} sm={12} className="courseTopicCol">
                            <h1 className="topicTitle">Find courses on almost any topic</h1>
                            <p className="topicSubTitle">Build your library for your career and personal growth</p>
                            <Button className="btn viewCourseBtn">View Courses <i className="fas fa-caret-right"></i></Button>
                        </Col>

                        <Col md={6} lg={6} sm={12}>
                            <div className="courseTopics">
                                <div className="js text-center"> <span>JavaScript</span> </div>
                                <div className="php text-center"> <span>PHP</span> </div>
                                <div className="python text-center"> <span>Python</span> </div>
                                <div className="more text-center"> Browse <br/> More </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseTopic;
