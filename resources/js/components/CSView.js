import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Axios from "axios";

class CsView extends Component {
    constructor() {
        super();
        this.state = {
            total_students: '',
            total_topics: '',
            isLoading: true
        }
    }

    componentDidMount() {
        Axios.get('/homeEtc').then((response) => {
            if(response.status == 200) {
                this.setState({
                    total_students: response.data[0]['total_students'],
                    total_topics: response.data[0]['total_topics'],
                    isLoading: false
                })
            } else {
                this.setState({
                    total_students: '---',
                    total_topics: '---',
                    isLoading: false
                })
            }
        }).catch((error) => {
            this.setState({
                total_students: '---',
                total_topics: '---',
                isLoading: false
            })
        })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="csViewRow text-dark">
                        <Col md={6} lg={6} sm={12} className="csDes">
                            <h2>Build Your Career With Us</h2>
                            <p>Our goal is to learn the next generation of creative professionals for a future in any industry.
                                We offer courses in most demanded industries. Whether you begin your journey on our courses website or choose the flexibility of video learning, our courses are designed to help you along your path.</p>
                        </Col>
                        <Col md={6} lg={6} sm={12}>
                            <h2 className="tsCount"><span>{this.state.total_topics}+</span> Topics || <span>{this.state.total_students}+</span> Students</h2> <br/>
                            <Button className="btn viewCourseBtn csbtn">Be a proud member <i className="fas fa-caret-right"></i></Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CsView;
