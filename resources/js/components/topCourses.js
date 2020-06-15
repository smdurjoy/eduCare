import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Axios from "axios";
import Loading from "./Loading";
import WentWrong from "./WentWrong";

class TopCourses extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        Axios.get("/homeCourseData").then((response) => {
            if(response.status == 200) {
                this.setState({data:response.data, isLoading:false})
            } else {
                this.setState({isError:true, isLoading:false})
            }
        }).catch((error) => {
            this.setState({isError:true, isLoading:false})
        })
    }

    render() {
        if(this.state.isLoading == true) {
            return <Loading />
        } else {
            if(this.state.isError == true) {
                return <WentWrong />
            } else {
                const myData = this.state.data;
                const myView = myData.map(data => {
                return (
                    <Col lg={3} md={3} sm={12}>
                        <div className="courseCard text-center">
                            <img src={data.course_image}/>
                            <h2 className="courseName">{data.course_name}</h2>
                            <p className="courseDescription">{data.short_des}</p>
                        </div>
                    </Col>
                    )
                })
                return (
                    <Fragment>
                        <Container fluid={true} className="text-center topCourse">
                            <h3 className="title">Top Courses</h3>
                            <Row className="courseRow">
                                {myView}
                            </Row>
                        </Container>
                    </Fragment>
                );
            }
        }
    }
}

export default TopCourses;
