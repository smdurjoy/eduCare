import React, {Component, Fragment} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";

class Navigation extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">eLearning</Navbar.Brand>
                    <Nav className="ml-auto text-white">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Courses</Nav.Link>
                        <Nav.Link href="#pricing">Our Team</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    <Button className="btn btn-info ml-auto">Purchase</Button>
                </Navbar>
            </Fragment>
        );
    }
}

export default Navigation;
