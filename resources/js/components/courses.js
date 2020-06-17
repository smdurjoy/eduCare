import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Axios from "axios";
import {Link} from "react-router-dom";
import Loading from "./Loading";
import WentWrong from "./WentWrong";

class Courses extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        Axios.get("/courseData").then((response) => {
            if(response.status == 200) {
                this.setState({data:response.data, isLoading:false})
            } else if(response.data == null) {
                this.setState({isError:true, isLoading:false})
            }
        }).catch((error) => {
            this.setState({isError:true, isLoading:false})
        })
    }

    render() {
        if(this.state.isLoading == true) {
            return <Loading/>
        } else if (this.state.isError == true) {
            return <WentWrong/>
        } else {
            const myData = this.state.data;
            const myView = myData.map(data => {
                return(
                    <div>
                        <Row className="mb-4">
                            <Col md={4} lg={4} sm={12} className="courseImageCol">
                                <img src={data.course_image}/>
                            </Col>
                            <Col md={8} lg={8} sm={12}>
                                <Card border="light" style={{ width: '100%' }}>
                                    <Card.Header>
                                        <h6 className="float-left">{data.category.category_name}</h6>
                                        <h6 className="float-right">Enrolled: {data.total_students}</h6>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title className="footerTitle text-center">{data.course_name}</Card.Title>
                                        <Card.Text className="text-center">
                                            <p>{data.short_des}</p>
                                            <Link to={"/courseDetails/"+data.id+"/"+data.course_name} className="courseLink">View Details</Link>
                                            <Link to={"//"+data.course_link} className="courseLink">Enroll Now</Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <hr/>
                    </div>
                );
            });
            return (
                <Fragment>
                    <Container className="mt-5 mb-5">
                        {myView}
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Courses;
