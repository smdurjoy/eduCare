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
                                <div className="box1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium beatae distinctio eaque ex expedita nam nostrum officiis provident velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quis!</div>
                                <div className="box2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, recusandae!</div>
                                <div className="box3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate doloremque doloribus explicabo inventore pariatur quos reprehenderit temporibus velit vero.</div>
                                <div className="box4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, totam?</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseTopic;
