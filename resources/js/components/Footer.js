import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center p-4 footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-2 text-justify">
                            <h2 className="footerTitle">Follow Us</h2>
                            <a className="footerLink" target="_blank" href="#"><i className="fab fa-facebook"></i> Facebook</a><br/>
                            <a className="footerLink" target="_blank" href="#"><i className="fab fa-youtube"></i> YouTube</a><br/>
                            <a className="footerLink" target="_blank" href="#"><i className="fab fa-twitter"></i> Twitter</a>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-2 text-justify">
                            <h1 className="footerTitle">Address</h1>
                            <p className="footerDes" ><i className="fas fa-map-marker-alt"></i> East Guptapara, Rangpur</p>
                            <p className="footerDes" ><i className="fas fa-phone-square-alt"></i> 01784996428</p>
                            <p className="footerDes" ><i className="fas fa-envelope"></i> smdurjoy.cse@gmail.com</p>
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
                    <a className="copyrightLink" href="#">© smdurjoy</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;
