import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Axios from "axios";

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            address: '',
            phone: '',
            email: '',
            facebook: '',
            youtube: '',
            twitter: '',
            footer_credit: '',
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
                    facebook: response.data[0]['facebook'],
                    youtube: response.data[0]['youtube'],
                    twitter: response.data[0]['twitter'],
                    footer_credit: response.data[0]['footer_credit'],
                    isLoading: false,
                })
            } else {
                this.setState({isLoading:false, isError:true})
            }
        }).catch((error) => {
            this.setState({isLoading:false, isError:true})
        })
    }

    render() {
        return (
            <Fragment>
                <hr/>
                <Container className="text-center p-4 footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-2 text-justify">
                            <h2 className="footerTitle">Follow Us</h2>
                            <a className="footerLink" target="_blank" href={this.state.facebook}><i className="fab fa-facebook"></i> Facebook</a><br/>
                            <a className="footerLink" target="_blank" href={this.state.youtube}><i className="fab fa-youtube"></i> YouTube</a><br/>
                            <a className="footerLink" target="_blank" href={this.state.twitter}><i className="fab fa-twitter"></i> Twitter</a>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-2 text-justify">
                            <h1 className="footerTitle">Address</h1>
                            <p className="footerDes" ><i className="fas fa-map-marker-alt"></i> {this.state.address}</p>
                            <p className="footerDes" ><i className="fas fa-phone-square-alt"></i> {this.state.phone}</p>
                            <p className="footerDes" ><i className="fas fa-envelope"></i> {this.state.email}</p>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-2 pl-5 text-justify">
                            <h1 className="footerTitle">Information</h1>
                            <Link className="footerLink" to="/about">About Us</Link><br/>
                            <Link className="footerLink" to="/contact">Contact Us</Link>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-2 pl-5 text-justify">
                            <h1 className="footerTitle">Legal</h1>
                            <Link className="footerLink" to="/Refund">Refund Policy</Link><br/>
                            <Link className="footerLink" to="/Terms">Terms And Condition</Link><br/>
                            <Link  className="footerLink" to="/Privacy">Privacy Policy</Link >
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" target="_blank" href={this.state.footer_credit}>© smdurjoy</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;
