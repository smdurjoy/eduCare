import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Axios from "axios";
import Loading from "./Loading";
import WentWrong from "./WentWrong";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            address: '',
            phone: '',
            email: '',
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        Axios.get('/footerData').then((response) => {
            if(response.status == 200) {
                this.setState({
                    address: response.data[0]['address'],
                    phone: response.data[0]['phone'],
                    email: response.data[0]['email'],
                    isLoading: false
                })
            } else {
                this.setState({isLoading:false, isError:true})
            }
        }).catch((error) => {
            this.setState({isLoading:false, isError:true})
        })
    }

    render() {
        if(this.state.isLoading == true) {
            return <Loading/>
        } else if(this.state.isError == true) {
            return <WentWrong/>
        } else {
            return (
                <Fragment>
                    <Container className="mt-5 mb-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h1 className="title">Drop a Message</h1>
                                <Form>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="contactLabel">Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Your Name" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="contactLabel">Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your email" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className="contactLabel">Message</Form.Label>
                                        <Form.Control as="textarea" rows="3" placeholder="Enter Message"/>
                                    </Form.Group>
                                    <Button className="btn contactBtn">Send</Button>
                                </Form>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="p-2 text-justify">
                                <h1 className="title ml-5">Find Us</h1>
                                <p className="footerDes ml-5" ><i className="fas fa-map-marker-alt"></i> <b>Address:</b> {this.state.address}</p>
                                <p className="footerDes ml-5" ><i className="fas fa-phone-square-alt"></i> <b>Phone:</b> {this.state.phone}</p>
                                <p className="footerDes ml-5" ><i className="fas fa-envelope"></i> <b>Email:</b> {this.state.email}</p>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Contact;
