import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import Axios from "axios";
import Loading from "./Loading";
import WentWrong from "./WentWrong";
import ReactHtmlParser from 'react-html-parser';
import {Link} from "react-router-dom";
import "video-react/dist/video-react.css";
import {Player, BigPlayButton} from 'video-react';

class CourseDetails extends Component {
    constructor(props) {
        super(props);
        this.state= {
            title: '',
            course_image: '',
            long_des: '',
            total_lecture: '',
            total_students: '',
            skill_all: '',
            video_url: '',
            course_link: '',
            isLoading: "text-center",
            isError: false
        }
    }

    componentDidMount() {
        Axios.get('/courseDetails/'+this.props.id).then((response) => {
            if(response.status == 200) {
                this.setState({
                    title: response.data[0]['title'],
                    course_image: response.data[0]['course_image'],
                    long_des: response.data[0]['long_des'],
                    total_lecture: response.data[0]['total_lecture'],
                    total_students: response.data[0]['total_students'],
                    skill_all: response.data[0]['skill_all'],
                    video_url: response.data[0]['video_url'],
                    course_link: response.data[0]['course_link'],
                    isLoading: "d-none"
                })
            } else {
                this.setState({isLoading: false, isError: true})
            }
        }).catch((error) => {
            this.setState({isLoading: false, isError: true})
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="smallFixedBanner p-0" fluid={true}>
                    <div className="smallBannerOverlay">
                        <Container className="topPageContentCourse">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <h3 className="cName">{this.state.title}</h3>
                                    <h5 className="totalLecture mt-2">Total Lecture: {this.state.total_lecture}</h5>
                                    <h5 className="totalLecture mt-0">Total Student: {this.state.total_students}</h5>
                                </Col>

                                <Col sm={12} md={6} lg={6}>
                                    <p className="courseDes">{this.state.long_des}</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className="courseDesCon" fluid={true}>
                    <Container className="mt-5 mb-5">
                        <Row className={this.state.isLoading}> <Loading/> </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <h1 className="courseName">Skill You Get</h1>
                                <ul className="skills ml-3">
                                    { ReactHtmlParser(this.state.skill_all) }
                                </ul>
                                <Link to={this.state.course_link} className="courseLink">Enroll Now</Link>
                            </Col>

                            <Col sm={12} md={6} lg={6}>
                                <Player>
                                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                    <BigPlayButton position="center" />
                                </Player>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;
